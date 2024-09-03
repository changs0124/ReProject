package com.study.ReProject.repository;

import com.study.ReProject.entity.UserRoles;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRolesMapper {
    int save(UserRoles userRoles);
    int deleteByUserId(int userId);
}
