package com.study.ReProject.controller;

import com.study.ReProject.dto.request.todo.ReqAddTodoDto;
import com.study.ReProject.dto.request.todo.ReqModifyTodoDto;
import com.study.ReProject.security.principal.PrincipalUser;
import com.study.ReProject.service.AuthService;
import com.study.ReProject.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @Autowired
    private AuthService authService;

    @GetMapping("/todo/group")
    public ResponseEntity<?> getGroup() {
        PrincipalUser user = authService.getUserIdByAccessToken();
        log.info("getGroup");
        return ResponseEntity.ok().body(todoService.getTodoGroup(user.getUserId()));
    }

    @GetMapping("/todo/today")
    public ResponseEntity<?> getToday() {
        PrincipalUser user = authService.getUserIdByAccessToken();
        log.info("getToday");
        return ResponseEntity.ok().body(todoService.getTodoToday(user.getUserId()));
    }

    @GetMapping("/todo/counts")
    public ResponseEntity<?> getCounts() {
        PrincipalUser user = authService.getUserIdByAccessToken();
        log.info("getCounts");
        return ResponseEntity.ok().body(todoService.getTodoCounts(user.getUserId()));
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> status(@PathVariable int todoId) {
        log.info("status");
        return ResponseEntity.ok().body(todoService.modifyStatus(todoId));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modify(@RequestBody ReqModifyTodoDto reqModifyTodoDto) {
        log.info("{}", reqModifyTodoDto);
        return ResponseEntity.ok().body(todoService.modifyTodo(reqModifyTodoDto));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> delete(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqAddTodoDto dto) {
        PrincipalUser user = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        log.info("{}", dto);
        return ResponseEntity.ok().body(todoService.add(dto, user.getUserId()));
    }

}











