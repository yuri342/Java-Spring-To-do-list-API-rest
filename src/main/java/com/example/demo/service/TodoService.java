package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }

    public Todo findById(Long id){
        return todoRepository.findById(id).orElseThrow(() -> new RuntimeException("To-do com ID " + id + " não encontrado."));
    }

    public Todo save(Todo todo){
        return todoRepository.save(todo);
    }

    public List<?> updateTodos(Todo todo){
        if (!todoRepository.existsById(todo.getId())) {
            throw new RuntimeException("To-do com ID " + todo.getId() + " não encontrado.");
        }
        todoRepository.save(todo);
        return findAll();
    }

    public List<Todo> findAll(){
        Sort sortedTodos = Sort.by("prioridade").descending().and(Sort.by("titulo").ascending());
        return todoRepository.findAll(sortedTodos);
    }

    public void deleteById(Long id){
        if(!todoRepository.existsById(id)){
            throw new RuntimeException("To-do com ID "+id+" não encontrado.");
        }
        todoRepository.deleteById(id);
    }

}
