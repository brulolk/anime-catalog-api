import 'dotenv/config'; 
import { PrismaClient } from '@prisma/client';
// 1. Importamos o adaptador do SQLite
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

// 2. Configuramos o adaptador apontando para o nosso arquivo de banco de dados
const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:./dev.db"
});

// 3. 💉 INJETAMOS o adaptador dentro do PrismaClient!
export const prisma = new PrismaClient({ adapter });