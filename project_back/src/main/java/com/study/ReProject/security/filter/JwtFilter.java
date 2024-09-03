package com.study.ReProject.security.filter;

import com.study.ReProject.entity.User;
import com.study.ReProject.repository.UserMapper;
import com.study.ReProject.security.jwt.JwtProvider;
import com.study.ReProject.security.principal.PrincipalUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class JwtFilter extends GenericFilter {

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private UserMapper userMapper;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        String bearerAccessToken = request.getHeader("Authorization");
        if(bearerAccessToken == null || bearerAccessToken.isBlank()) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        String accessToken = jwtProvider.removeBearer(bearerAccessToken);
        Claims claims = null;
        try {
            claims = jwtProvider.getClaims(accessToken);
            int userId = (int) claims.get("userId");
            User user = userMapper.findById(userId);
            if(user == null) {
                throw new JwtException("해당 ID(" + userId + ")의 사용자 정보를 찾지 못했습니다.");
            }
            PrincipalUser principalUser = user.toPrincipal();
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalUser, principalUser.getPassword(), principalUser.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } catch (JwtException e) {
            e.printStackTrace();
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
