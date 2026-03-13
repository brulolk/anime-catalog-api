import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Iniciando o Seeding do banco de dados...");

    // Limpa a tabela antes de popular (evita dados duplicados se rodar duas vezes)
    await prisma.character.deleteMany();

    const characters = [
        { name: "Satoru Gojo", anime: "Jujutsu Kaisen", role: "Feiticeiro Nível Especial" },
        { name: "Yuji Itadori", anime: "Jujutsu Kaisen", role: "Receptáculo do Sukuna" },
        { name: "Isagi Yoichi", anime: "Blue Lock", role: "Atacante / Egoísta" },
        { name: "Meguru Bachira", anime: "Blue Lock", role: "Driblador" }
    ];

    for (const char of characters) {
        await prisma.character.create({
            data: char
        });
    }

    console.log("✅ Seeding concluído! Personagens inseridos com sucesso.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });