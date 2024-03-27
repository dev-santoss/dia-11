//Declarando variáveis
let arrayDeNomes = [];
let arrayDeNotas = [];
let contadorIndiceNome = 0;
let contadorIndiceNota = 0;
let continuar = 0;
let somaDeNotas = 0;
let mediaGeral = 0;

//Executando o doWhile
do {
  arrayDeNomes[arrayDeNomes.length] = prompt("Digite seu nome.");
  arrayDeNotas[arrayDeNotas.length] = Number(prompt("Digite sua nota."));

  continuar = Number(prompt("Você deseja continuar? \n 1-SIM \n 2-NÃO"));
} while (continuar == "1");

for (let index = 0; index < arrayDeNomes.length; index++) {
console.log(`Aluno:${arrayDeNomes[index]}, nota:${arrayDeNotas[index]}`)
  somaDeNotas += arrayDeNotas[index]
}
console.log(`A soma de todas as notas é de:${somaDeNotas}`)
mediaGeral = somaDeNotas/arrayDeNomes.length
console.log(`A media geral é de:${mediaGeral.toFixed(1)}`)

