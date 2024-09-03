package com.study.ReProject.entity;

import com.study.ReProject.security.principal.PrincipalUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class User {
    private int userId;
    private String username;
    private String password;
    private String name;
    private String img;
    private Set<UserRoles> userRoles;

    public PrincipalUser toPrincipal() {
        return PrincipalUser.builder()
                .userId(userId)
                .username(username)
                .password(password)
                .name(name)
                .img(img)
                .roles(userRoles)
                .build();
    }
}
