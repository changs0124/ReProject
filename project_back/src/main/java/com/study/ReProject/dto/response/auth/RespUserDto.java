package com.study.ReProject.dto.response.auth;

import com.study.ReProject.entity.UserRoles;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Builder
@Data
public class RespUserDto {
    private String username;
    private String name;
    private String img;
    private Set<UserRoles> roles;
}
