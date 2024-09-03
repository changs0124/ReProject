package com.study.ReProject.repository;

import com.study.ReProject.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User findByUsername(String username);
    User findById(int Userid);

    int save(User user);
    int deleteById(int Userid);
}
