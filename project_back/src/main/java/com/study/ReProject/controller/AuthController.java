package com.study.ReProject.controller;

import com.study.ReProject.aspect.annotation.ValidAop;
import com.study.ReProject.dto.request.auth.ReqAccessTokenDto;
import com.study.ReProject.dto.request.auth.ReqSigninDto;
import com.study.ReProject.dto.request.auth.ReqSignupDto;
import com.study.ReProject.exception.SignupException;
import com.study.ReProject.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class AuthController {

    @Autowired
    private AuthService authService;

    @ValidAop
    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody ReqSignupDto dto, BindingResult bindingResult) throws SignupException {
        log.info("{}", dto);
        return ResponseEntity.ok().body(authService.insertUserAndRoles(dto));
    }

    @ValidAop
    @PostMapping("/auth/signin")
    public ResponseEntity<?> signin(@Valid @RequestBody ReqSigninDto dto, BindingResult bindingResult) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(authService.generatedAccessToken(dto));
    }

    @GetMapping("/auth/access")
    public ResponseEntity<?> isAccessToken(ReqAccessTokenDto token) {
        log.info("{}", token);
        return ResponseEntity.ok().body(authService.isValidAccessToken(token.getAccessToken()));
    }

    @GetMapping("/auth/user")
    public ResponseEntity<?> getUserInfo() {
        return ResponseEntity.ok().body(authService.findUserByToken());
    }
}
