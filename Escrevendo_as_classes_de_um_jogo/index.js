//Desafio DIO Potência Tech iFood - Programação do Zero


//  Estrutura de dados e objetos 
//  - Escrevendo as classes de um jogo


// Definição da classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque = "";

        // Define o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
                break;
        }
// Desafio de Projeto
//    - Escrevendo as Classes de um Jogo.

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Instância de um herói
const heroi1 = new Heroi("Rony Weasley", 50, "guerreiro");
const heroi2 = new Heroi("Delphini", 2000, "mago");
const heroi3 = new Heroi("Herpo", 92, "monge");
const heroi4 = new Heroi("Ronald Weasley", 45, "ninja");

// Chamada do método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

