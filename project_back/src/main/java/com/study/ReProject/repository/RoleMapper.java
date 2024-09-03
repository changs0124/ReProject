package com.study.ReProject.repository;

import com.study.ReProject.entity.Role;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {
    int save(Role role);

    Role findByName(String rolename);
    Role findById(int roleId);
}
