import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/', // URL base da API
  timeout: 10000, // tempo limite (opcional)
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`, // se precisar de autenticação
  }
});

export default api;
