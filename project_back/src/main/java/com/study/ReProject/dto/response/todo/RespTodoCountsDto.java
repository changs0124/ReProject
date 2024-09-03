package com.study.ReProject.dto.response.todo;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespTodoCountsDto {
    private int all;
    private int today;
    private int important;
    private int done;
}
