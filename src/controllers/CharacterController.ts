import { Request, Response } from 'express';
import { CharacterService } from '../services/CharacterService';
import { prisma } from '../database/prisma';

// 💉 INJETANDO: Aqui nós passamos o banco real para o Service usar
const characterService = new CharacterService(prisma);

export class CharacterController {
    async getAll(req: Request, res: Response) {
        try {
            const characters = await characterService.getAllCharacters();
            
            res.json({
                message: "Catálogo carregado DIRETO DO BANCO DE DADOS! 🗄️",
                total: characters.length,
                characters: characters
            });
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }
    }

    // 🆕 NOVA FUNÇÃO: Intercepta o POST
    async create(req: Request, res: Response) {
        try {
            // Desestruturando o JSON que chegou no corpo da requisição (req.body)
            const { name, anime, role } = req.body;
            
            const newCharacter = await characterService.createCharacter({ name, anime, role });
            
            // Status 201 é o código HTTP universal para "Criado com sucesso"
            res.status(201).json({
                message: "Personagem criado e salvo no SQLite com sucesso!",
                character: newCharacter
            });
        } catch (error) {
            res.status(400).json({ error: "Erro ao criar personagem no banco." });
        }
    }
}