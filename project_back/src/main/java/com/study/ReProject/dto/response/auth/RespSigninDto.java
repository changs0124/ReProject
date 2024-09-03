package com.study.ReProject.dto.response.auth;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespSigninDto {
    private String expireDate;
    private String accessToken;
}
