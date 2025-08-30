package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.RecursoNaoEncontradoException;
import com.example.demo.model.Todo;
import com.example.demo.service.TodoService;

import jakarta.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/Todos")
public class TodoController {

    private final TodoService todoService;  

    public TodoController(TodoService todoService){
        this.todoService = todoService;
    }

    //GET 
    @GetMapping
    public List<Todo> findAll(){
        return todoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Todo todo = todoService.findById(id);
        return ResponseEntity.ok(todo);
    }

    //POST
    @PostMapping
    public ResponseEntity<?> save(@RequestBody @Valid Todo todo){
        if (todo.getTitulo().isEmpty() || todo.getTitulo().length() < 5){
            throw new RecursoNaoEncontradoException("o titulo deve ter mais de 5 caracteres");
        }
        Todo saved = todoService.save(todo);
        return ResponseEntity.status(201).body(saved);
    }

    //DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        todoService.deleteById(id);
        ResponseEntity.status(204);
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public List<Todo> updateTodos(@RequestBody Todo todo){
        return todoService.updateTodos(todo);
    }
}
