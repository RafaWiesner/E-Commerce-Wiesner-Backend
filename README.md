# E-commerce Backend

Backend do projeto E-commerce desenvolvido com Node.js, Express e Supabase.

## Tecnologias Utilizadas

- Node.js
- Express
- Supabase (PostgreSQL)
- JWT para autenticação
- Bcrypt para criptografia



## Estrutura do Projeto

```
backend/
├── controllers/    # Controladores da aplicação
├── models/        # Modelos do banco de dados
├── routes/        # Rotas da API
├── middleware/    # Middlewares
├── services/      # Serviços e lógica de negócio
└── config/        # Configurações
```

## Endpoints da API

### Autenticação
- POST `/api/auth/register` - Registro de usuário
- POST `/api/auth/login` - Login
- POST `/api/auth/reset-password` - Reset de senha

### Pedidos
- GET `/api/orders` - Lista pedidos
- POST `/api/orders` - Cria pedido
- PATCH `/api/orders/:id/status` - Atualiza status do pedido

## Segurança

- Todas as senhas são criptografadas com bcrypt
- Autenticação via JWT
- CORS configurado para aceitar apenas origens permitidas
- Variáveis sensíveis em arquivo .env 