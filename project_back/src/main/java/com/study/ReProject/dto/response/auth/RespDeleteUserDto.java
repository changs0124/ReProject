package com.study.ReProject.dto.response.auth;

import com.study.ReProject.entity.User;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespDeleteUserDto {
    private Boolean isDelete;
    private String message;
    private User deleteeduser;
}
