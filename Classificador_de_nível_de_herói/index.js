//Desafio DIO Potência Tech iFood - Programação do Zero

//  Dominando Estruturas de Controle
//   - Classificador de Nível de Herói

let nomeDoHeroi = "Hero";
let xp = 8464;
let nivel = "";

if (xp < 1000){
    nivel = "Ferro"
}else if(xp <2000){
    nivel = "Bronze"
}else if (xp < 5000){
     nivel = "Prata"
}else if (xp < 7000){
    nivel = "Ouro"
}else if (xp <8000){
    nivel = "Platina"
}else if (xp <9000){
    nivel = "Ascendente"
}else if(xp <10000){
    nivel = "Imortal"
}else if(xp >10000){
    nivel = "Radiante"
}
 
console.log("O Herói de nome " +  nomeDoHeroi + " está no nível de " +  nivel);
