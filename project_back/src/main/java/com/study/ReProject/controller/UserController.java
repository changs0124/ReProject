package com.study.ReProject.controller;

import com.study.ReProject.dto.request.auth.ReqAccessTokenDto;
import com.study.ReProject.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private AuthService authService;

    @GetMapping("/user")
    public ResponseEntity<?> getUserByToken(ReqAccessTokenDto dto) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(authService.findUserByToken());
    }
}
