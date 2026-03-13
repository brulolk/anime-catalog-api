// Repare que o tipo Character agora vem direto do banco de dados, e não do nosso modelo manual!
import { PrismaClient, Character } from '@prisma/client';

export class CharacterService {
    private prisma: PrismaClient;

    // 💉 INJEÇÃO DE DEPENDÊNCIA: O Service não cria o banco, ele RECEBE o banco!
    // Isso permite que no futuro a gente injete um "MockPrismaClient" para testes.
    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    // A função agora é 'async' e retorna uma Promise (igual ao Task/await do Swift)
    async getAllCharacters(): Promise<Character[]> {
        // O Prisma já criou a função findMany() para nós, e ela é totalmente tipada!
        return await this.prisma.character.findMany();
    }

    async createCharacter(data: { name: string, anime: string, role: string }): Promise<Character> {
        return await this.prisma.character.create({
            data: {
                name: data.name,
                anime: data.anime,
                role: data.role
            }
        });
    }
}