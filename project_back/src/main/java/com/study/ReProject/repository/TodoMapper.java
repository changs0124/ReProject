package com.study.ReProject.repository;

import com.study.ReProject.entity.Todo;
import com.study.ReProject.entity.TodoCounts;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
    int updateStatus(int todoId);
    int modifyTodoByTodoId(Todo todo);
    int deleteTodoByTodoId(int TodoId);

    List<Todo> getTodoAll(int userId);
    List<Todo> getTodoToday(int userId);

    TodoCounts getTodoCounts(int userId);
}
