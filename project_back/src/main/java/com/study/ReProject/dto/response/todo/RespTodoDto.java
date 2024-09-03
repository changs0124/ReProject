package com.study.ReProject.dto.response.todo;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespTodoDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int status;
    private String todoDateTime;
}
