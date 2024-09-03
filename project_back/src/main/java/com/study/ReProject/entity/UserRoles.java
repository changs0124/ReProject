package com.study.ReProject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UserRoles {
    private int userRolesId;
    private int userId;
    private int roleId;
    private Role role;
}
