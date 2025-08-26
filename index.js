// 🎯 DESAFIO: Classificador de nível de Herói
// Usando: Variáveis, Operadores, Laços de repetição, Estruturas de decisões

console.log("=== CLASSIFICADOR DE NÍVEL DE HERÓI ===\n");

// Variáveis para armazenar nome e XP do herói
let nomeHeroi = "Arthur";
let experienciaHeroi = 7500;
let nivelHeroi;

// Estrutura de decisão para classificar o nível
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// Saída conforme especificado (SEM os asteriscos que causavam erro)
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);

console.log("\n=== TESTANDO DIFERENTES HERÓIS ===\n");

// Função reutilizável para classificar qualquer herói
function classificarHeroi(nome, xp) {
    let nivel;
    
    // Estrutura de decisão para determinar o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }
    
    // Retorna a mensagem formatada (sem asteriscos)
    return "O Herói de nome " + nome + " está no nível de " + nivel;
}

// Testando com diferentes heróis
console.log(classificarHeroi("Merlin", 500));      // Ferro
console.log(classificarHeroi("Lancelot", 1500));   // Bronze
console.log(classificarHeroi("Gandalf", 3500));    // Prata
console.log(classificarHeroi("Aragorn", 6500));    // Ouro
console.log(classificarHeroi("Legolas", 7500));    // Platina
console.log(classificarHeroi("Gimli", 8500));      // Ascendente
console.log(classificarHeroi("Frodo", 9500));      // Imortal
console.log(classificarHeroi("Sauron", 15000));    // Radiante

console.log("\n=== CLASSIFICAÇÃO EM LOTE (usando laços) ===\n");

// Array com dados dos heróis
let herois = [
    { nome: "Conan", xp: 800 },
    { nome: "Thor", xp: 1200 },
    { nome: "Hulk", xp: 2500 },
    { nome: "Iron Man", xp: 5500 },
    { nome: "Capitão América", xp: 7200 },
    { nome: "Doutor Estranho", xp: 8300 },
    { nome: "Scarlet Witch", xp: 9200 },
    { nome: "Thanos", xp: 12000 }
];

// Laço de repetição para processar todos os heróis
for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nome = heroi.nome;
    let xp = heroi.xp;
    let nivel;
    
    // Estrutura de decisão
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }
    
    // Saída para cada herói
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}

console.log("\n=== VERSÃO MAIS SIMPLES PARA TESTE ===\n");

// Versão mais simples sem funções complexas
let heroiParaTeste = [
    ["Link", 450],
    ["Zelda", 1300],
    ["Mario", 2800],
    ["Luigi", 6200],
    ["Sonic", 7600],
    ["Tails", 8400],
    ["Knuckles", 9700],
    ["Shadow", 11500]
];

// Processando com laço for simples
for (let i = 0; i < heroiParaTeste.length; i++) {
    let nome = heroiParaTeste[i][0];
    let xp = heroiParaTeste[i][1];
    let nivel;
    
    // Estrutura de decisão básica
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}

console.log("\n=== TESTE INDIVIDUAL MANUAL ===");

// Teste manual individual
let nomeTest = "Goku";
let xpTest = 5500;
let nivelTest;

if (xpTest < 1000) {
    nivelTest = "Ferro";
} else if (xpTest >= 1001 && xpTest <= 2000) {
    nivelTest = "Bronze";
} else if (xpTest >= 2001 && xpTest <= 5000) {
    nivelTest = "Prata";
} else if (xpTest >= 5001 && xpTest <= 7000) {
    nivelTest = "Ouro";
} else if (xpTest >= 7001 && xpTest <= 8000) {
    nivelTest = "Platina";
} else if (xpTest >= 8001 && xpTest <= 9000) {
    nivelTest = "Ascendente";
} else if (xpTest >= 9001 && xpTest <= 10000) {
    nivelTest = "Imortal";
} else if (xpTest >= 10001) {
    nivelTest = "Radiante";
}

console.log("O Herói de nome " + nomeTest + " está no nível de " + nivelTest);