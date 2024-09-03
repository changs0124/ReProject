package com.study.ReProject.service;

import com.study.ReProject.dto.request.todo.ReqAddTodoDto;
import com.study.ReProject.dto.request.todo.ReqModifyTodoDto;
import com.study.ReProject.dto.response.todo.RespTodoCountsDto;
import com.study.ReProject.dto.response.todo.RespTodoDto;
import com.study.ReProject.entity.Todo;
import com.study.ReProject.entity.TodoCounts;
import com.study.ReProject.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {
    @Autowired
    private TodoMapper todoMapper;

    public int add(ReqAddTodoDto reqAddTodoDto, int userId) {
        return todoMapper.save(reqAddTodoDto.toEntity(userId));
    }

    public RespTodoCountsDto getTodoCounts(int userId) {
        TodoCounts count = todoMapper.getTodoCounts(userId);
        return  count.toDto();
    }

    public List<RespTodoDto> getTodoGroup(int userId) {
        List<Todo> EntityList = todoMapper.getTodoAll(userId);
        List<RespTodoDto> DtoAllList = EntityList.stream().map(Todo::toTodoDto).collect(Collectors.toList());
        return DtoAllList;
    }

    public List<RespTodoDto> getTodoToday(int userId) {
        List<Todo> EntityList = todoMapper.getTodoToday(userId);
        List<RespTodoDto> DtoTodayList = EntityList.stream().map(Todo::toTodoDto).collect(Collectors.toList());
        return DtoTodayList;
    }

    public int modifyStatus(int todoId) {
        return todoMapper.updateStatus(todoId);
    }

    public int modifyTodo(ReqModifyTodoDto reqModifyTodoDto) {
        return todoMapper.modifyTodoByTodoId(reqModifyTodoDto.toEntity());
    }

    public int deleteTodo(int todoId) {
        return todoMapper.deleteTodoByTodoId(todoId);
    }
}
