package com.study.ReProject.service;

import com.study.ReProject.dto.request.auth.ReqAccessTokenDto;
import com.study.ReProject.dto.request.auth.ReqSigninDto;
import com.study.ReProject.dto.request.auth.ReqSignupDto;
import com.study.ReProject.dto.response.auth.RespDeleteUserDto;
import com.study.ReProject.dto.response.auth.RespSigninDto;
import com.study.ReProject.dto.response.auth.RespSignupDto;
import com.study.ReProject.dto.response.auth.RespUserDto;
import com.study.ReProject.entity.Role;
import com.study.ReProject.entity.User;
import com.study.ReProject.entity.UserRoles;
import com.study.ReProject.exception.AccessTokenException;
import com.study.ReProject.exception.SignupException;
import com.study.ReProject.repository.RoleMapper;
import com.study.ReProject.repository.UserMapper;
import com.study.ReProject.repository.UserRolesMapper;
import com.study.ReProject.security.jwt.JwtProvider;
import com.study.ReProject.security.principal.PrincipalUser;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
public class AuthService{

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private UserRolesMapper userRolesMapper;

    @Autowired
    private JwtProvider jwtProvider;

    public boolean isDuplicateUsername(String username) {
        return Optional.ofNullable(userMapper.findByUsername(username)).isPresent();
    }

    public User checkUsernameAndPassword(String username, String password) {
        User user = userMapper.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("사용자 정보를 확인하세요");
        }
        if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("사용자 정보를 확인하세요");
        }
        return user;
    }

    @Transactional(rollbackFor = SignupException.class)
    public RespSignupDto insertUserAndRoles(ReqSignupDto dto) throws SignupException {
        User user = null;
        try {
            user = dto.toEntity(passwordEncoder);
            userMapper.save(user);

            Role role = roleMapper.findByName("ROLE_USER");
            if(role == null) {
                roleMapper.save(Role.builder().rolename("ROLE_USER").build());
            }

            UserRoles userRoles = UserRoles.builder()
                    .userId(user.getUserId())
                    .roleId(role.getRoleId())
                    .build();
            userRolesMapper.save(userRoles);

            user.setUserRoles(Set.of(userRoles));
        } catch(Exception e) {
            throw new SignupException(e.getMessage());
        }

        return RespSignupDto.builder()
                .message("회원가입 완료")
                .user(user)
                .build();
    }

    public RespSigninDto generatedAccessToken(ReqSigninDto dto) {
        User user = checkUsernameAndPassword(dto.getUsername(), dto.getPassword());
        return RespSigninDto.builder()
                .expireDate(jwtProvider.getExpireDate().toLocaleString())
                .accessToken(jwtProvider.generatedAccessToken(user))
                .build();
    }

    public RespDeleteUserDto deleteUser(int userId) {
        User user = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
        if(principalUser.getUserId() != userId) {
            throw new AuthenticationServiceException("삭제 할 수 있는 권한이 없습니다.");
        }
        user = userMapper.findById(userId);
        if(user == null) {
            throw new AuthenticationServiceException("해당 사용자는 존재하지 않는 사용자입니다.");
        }
        userMapper.deleteById(userId);
        userRolesMapper.deleteByUserId(userId);

        return RespDeleteUserDto.builder()
                .isDelete(true)
                .message("사용자 삭제 완료")
                .deleteeduser(user)
                .build();
    }

    public Boolean isValidAccessToken(String bearerAccessToken) {
        try {
            String accessToken = jwtProvider.removeBearer(bearerAccessToken);
            Claims claims = jwtProvider.getClaims(accessToken);
            int userId = (int) claims.get("userId");
            User user = userMapper.findById(userId);

            if (user == null) {
                throw new RuntimeException();
            }
        } catch (RuntimeException e) {
            throw new AccessTokenException("AccessToken 유효성 검사 실패");
        }
        return true;
    }

    public RespUserDto findUserByToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
        RespUserDto respGetUserDto = RespUserDto.builder()
                .username(principalUser.getUsername())
                .name(principalUser.getName())
                .img(principalUser.getImg())
                .roles(principalUser.getRoles())
                .build();
        return respGetUserDto;
    }

    public PrincipalUser getUserIdByAccessToken() {
        return (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
