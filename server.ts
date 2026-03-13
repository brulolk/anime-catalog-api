import express from 'express';
import cors from 'cors';
import characterRoutes from './src/routes/characterRoutes';

const app = express();

// 1. Pega a porta do Render ou usa a 3000 no seu Mac
// Converte a string do ambiente para número, ou usa 3000 como fallback
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// 2. Libera o acesso para qualquer aplicativo/site (CORS)
app.use(cors());
app.use(express.json());

// Rotas
app.use('/characters', characterRoutes);

// 3. Escuta no 0.0.0.0 para aceitar conexões externas
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de Produção rodando na porta ${PORT} 🚀`);
});