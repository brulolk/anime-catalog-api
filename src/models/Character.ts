export interface Character {
    id: number;
    name: string;
    anime: string;
    role: string;
}

export const catalog: Character[] = [
    { id: 1, name: "Satoru Gojo", anime: "Jujutsu Kaisen", role: "Feiticeiro Nível Especial" },
    { id: 2, name: "Yuji Itadori", anime: "Jujutsu Kaisen", role: "Receptáculo do Sukuna" },
    { id: 3, name: "Isagi Yoichi", anime: "Blue Lock", role: "Atacante / Egoísta" },
    { id: 4, name: "Meguru Bachira", anime: "Blue Lock", role: "Driblador" }
];