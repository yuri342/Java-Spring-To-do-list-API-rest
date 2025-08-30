# APIJr - Projeto de Gerenciamento de Tarefas (Todo)

Este projeto é uma API REST desenvolvida com Spring Boot para gerenciar tarefas (todos). Permite criar, listar, buscar, atualizar e deletar tarefas.

## Endpoints

- **GET /Todos**  
  Lista todas as tarefas.

- **GET /Todos/{id}**  
  Busca uma tarefa pelo ID.

- **POST /Todos**  
  Cria uma nova tarefa.  
  Corpo esperado (JSON):
  ```json
  {
    "titulo": "Estudar",
    "descricao" : "matematica algebra e geometria",
    "concluido" : false,
    "prioridade": 0
  }
  ```

- **PUT /Todos**  
  Atualiza uma tarefa existente.  
  Corpo esperado (JSON):
  ```json
  {
    "id": 1,
    "titulo": "Estudar Spring",
    "descrircao" : "fazer Api rest",
    "concluido" : true,
    "prioridade": 2
  }
  ```

- **DELETE /Todos/{id}**  
  Remove uma tarefa pelo ID.

## Tecnologias

- Java 17+
- Spring Boot
- Spring Data JPA
- H2 Database (padrão, pode ser alterado)

## Como executar

1. Clone o repositório
2. Execute o projeto com o comando:
   ```
   ./mvnw spring-boot:run
   ```
3. Acesse os endpoints via Postman, Insomnia ou curl.

## Observações

- Retornos seguem padrões REST, usando códigos HTTP adequados (200, 201, 204, 404).
- Exceções são tratadas para informar quando um recurso não é encontrado.