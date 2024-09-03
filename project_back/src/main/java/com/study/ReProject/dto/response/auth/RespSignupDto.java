package com.study.ReProject.dto.response.auth;

import com.study.ReProject.entity.User;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespSignupDto {
    private String message;
    private User user;
}
