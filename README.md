# 🎯 Classificador de Nível de Herói

## 📋 Sobre o Projeto

O **Classificador de Nível de Herói** é uma aplicação em JavaScript que classifica heróis em diferentes níveis baseado em sua experiência (XP). Este projeto foi desenvolvido como parte de um desafio de programação que explora conceitos fundamentais como variáveis, operadores, estruturas de decisão e laços de repetição.

## 🚀 Funcionalidades

- **Classificação Individual**: Classifica um herói específico baseado em seu XP
- **Classificação em Lote**: Processa múltiplos heróis simultaneamente
- **Função Reutilizável**: Implementa uma função para facilitar a reutilização do código
- **Múltiplos Métodos de Teste**: Diferentes abordagens para validar a funcionalidade

## 📊 Níveis de Classificação

O sistema classifica os heróis nos seguintes níveis baseado em sua experiência:

| Nível | Faixa de XP | Descrição |
|-------|-------------|-----------|
| 🔧 **Ferro** | < 1.000 | Heróis iniciantes |
| 🥉 **Bronze** | 1.001 - 2.000 | Heróis em desenvolvimento |
| 🥈 **Prata** | 2.001 - 5.000 | Heróis experientes |
| 🥇 **Ouro** | 5.001 - 7.000 | Heróis veteranos |
| 💎 **Platina** | 7.001 - 8.000 | Heróis elite |
| ⬆️ **Ascendente** | 8.001 - 9.000 | Heróis superiores |
| ♾️ **Imortal** | 9.001 - 10.000 | Heróis lendários |
| ✨ **Radiante** | > 10.000 | Heróis supremos |

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (para execução)
- **Console API** (para saída de dados)

## 📁 Estrutura do Código

### Componentes Principais

1. **Classificação Individual**
   ```javascript
   let nomeHeroi = "Arthur";
   let experienciaHeroi = 7500;
   // Lógica de classificação...
   ```

2. **Função Reutilizável**
   ```javascript
   function classificarHeroi(nome, xp) {
       // Implementação da lógica de classificação
       return "O Herói de nome " + nome + " está no nível de " + nivel;
   }
   ```

3. **Processamento em Lote**
   ```javascript
   for (let i = 0; i < herois.length; i++) {
       // Processamento de múltiplos heróis
   }
   ```

## 🎮 Como Executar

### Pré-requisitos
- Node.js instalado no sistema
- Terminal/Prompt de comando

### Passos para Execução

1. **Clone ou baixe o arquivo**
   ```bash
   # Se usando Git
   git clone [url-do-repositorio]
   
   # Ou baixe o arquivo diretamente
   ```

2. **Navegue até o diretório**
   ```bash
   cd classificador-heroi
   ```

3. **Execute o código**
   ```bash
   node classificador-heroi.js
   ```

### Executar no Navegador

Alternativamente, você pode executar o código diretamente no console do navegador:

1. Abra o Console do Desenvolvedor (F12)
2. Cole o código JavaScript
3. Pressione Enter para executar

## 📈 Exemplos de Saída

```
=== CLASSIFICADOR DE NÍVEL DE HERÓI ===

O Herói de nome Arthur está no nível de Platina

=== TESTANDO DIFERENTES HERÓIS ===

O Herói de nome Merlin está no nível de Ferro
O Herói de nome Lancelot está no nível de Bronze
O Herói de nome Gandalf está no nível de Prata
O Herói de nome Aragorn está no nível de Ouro
O Herói de nome Legolas está no nível de Platina
O Herói de nome Gimli está no nível de Ascendente
O Herói de nome Frodo está no nível de Imortal
O Herói de nome Sauron está no nível de Radiante
```

## 🔧 Conceitos de Programação Implementados

### ✅ Variáveis
- Declaração e inicialização de variáveis
- Uso de diferentes tipos de dados (string, number)

### ✅ Operadores
- Operadores de comparação (`<`, `>=`, `<=`)
- Operadores lógicos (`&&`)
- Operador de concatenação (`+`)

### ✅ Estruturas de Decisão
- Estruturas condicionais `if`, `else if`, `else`
- Múltiplas condições encadeadas
- Comparações numéricas para ranges

### ✅ Laços de Repetição
- Loop `for` tradicional
- Iteração sobre arrays
- Processamento sequencial de dados

### ✅ Funções
- Declaração de funções reutilizáveis
- Parâmetros e valores de retorno
- Encapsulamento de lógica

## 🎯 Casos de Teste

O código inclui diversos casos de teste para validar a funcionalidade:

- **Heróis Clássicos**: Merlin, Lancelot, Gandalf, Aragorn
- **Heróis Marvel**: Thor, Hulk, Iron Man, Capitão América
- **Heróis de Games**: Link, Mario, Sonic, Shadow
- **Teste Manual**: Goku com XP personalizado

## 🤝 Contribuições

Este projeto está aberto para melhorias! Algumas ideias para expansão:

- Adicionar validação de entrada
- Implementar interface gráfica
- Criar sistema de progressão de XP
- Adicionar mais níveis de classificação
- Implementar salvamento de dados

## 👨‍💻 Autor

Desenvolvido como parte de um desafio de programação focado em lógica de programação e estruturas fundamentais.
