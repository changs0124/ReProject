package com.study.ReProject.dto.request.todo;

import com.study.ReProject.entity.Todo;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class ReqAddTodoDto {
    private String title;
    private String content;
    private String dateTime;
    private int important;

    public Todo toEntity(int userId) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        LocalDateTime todoDateTime = LocalDateTime.parse(dateTime + ":00", formatter);

        return Todo.builder()
                .userId(userId)
                .title(title)
                .content(content)
                .important(important)
                .todoDateTime(LocalDateTime.parse(dateTime))
                .build();
    }
}
