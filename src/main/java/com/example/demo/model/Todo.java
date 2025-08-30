package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "todos")
public class Todo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titulo;

    private String descricao;
    private boolean concluido;
    
    @NotNull
    private int prioridade;

    public Todo(){}

    public Todo(String titulo, String descricao, boolean concluido, int prioridade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluido = concluido;
        this.prioridade = prioridade;
    }

    public String getDescricao() {
        return descricao;
    }
    public Long getId() {
        return id;
    }
    public int getPrioridade() {
        return prioridade;
    }
    public String getTitulo() {
        return titulo;
    }
    
    public boolean isConcluido() {
        return concluido;
    }

    public void setConcluido(boolean concluido) {
        this.concluido = concluido;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
