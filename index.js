import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User, Order, OrderItem } from './models/index.js';
import authRoutes from './routes/auth.js';
import orderRoutes from './routes/orders.js';
import './config/database.js';
import errorHandler from './middleware/errorHandler.js';

// Configuração do ambiente
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT;

console.log(process.env.JWT_SECRET) 

// Middleware
app.use(cors());
app.use(express.json());



// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 