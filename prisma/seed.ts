import { prisma } from '../src/database/prisma';

async function main() {
    console.log("🌱 Iniciando o Seeding do banco de dados...");

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
        console.error("❌ Erro no seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });