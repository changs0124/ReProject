package com.study.ReProject.entity;

import com.study.ReProject.dto.response.todo.RespTodoCountsDto;
import lombok.Data;

@Data
public class TodoCounts {
    private int all;
    private int today;
    private int important;
    private int done;

    public RespTodoCountsDto toDto() {
        return RespTodoCountsDto.builder()
                .all(all)
                .today(today)
                .important(important)
                .done(done)
                .build();
    }
}
