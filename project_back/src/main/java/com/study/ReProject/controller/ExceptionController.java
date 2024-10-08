package com.study.ReProject.controller;

import com.study.ReProject.exception.AccessTokenException;
import com.study.ReProject.exception.SignupException;
import com.study.ReProject.exception.ValidException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(ValidException.class)
    public ResponseEntity<?> validException(ValidException e) {
        return ResponseEntity.badRequest().body(e.getFieldErrors());
    }

    @ExceptionHandler(SignupException.class)
    public ResponseEntity<?> signupException(SignupException e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<?> usernameException(UsernameNotFoundException e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> passwordException(BadCredentialsException e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
    }

    @ExceptionHandler(AccessTokenException.class)
    public ResponseEntity<?> accessTokenException(AccessTokenException e) {
        return ResponseEntity.status(403).body(false);
    }
}
