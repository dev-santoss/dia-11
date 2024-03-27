let arrayModelo = []
let arrayAno = []
let arrayValor = []
let continuar = 1

while (continuar == 1) {
    arrayModelo[arrayModelo.length] = prompt('Qual o modelo do carro?')
    arrayAno[arrayAno.length] = Number(prompt('Qual o ano do carro?'))
    arrayValor[arrayValor.length] = Number(prompt('Qual o valor do carro?'))

    continuar = prompt('Você deseja continuar? \n 1: SIM \n 2: NÃO')
}
for (let index = 0; index < arrayModelo.length; index++) {
console.log(`${arrayModelo[index]}, ${arrayAno[index]} Valor: ${arrayValor[index]}`)
}
for (let i = 0; i < arrayValor.length; i++) {
    for (let j = 0; j < arrayValor.length; j++) {
        if (arrayValor[j] > arrayValor[j+1]) {
            let aModelo = arrayModelo[j+1]
            let bModelo = arrayModelo[j]
                arrayModelo[j] = aModelo
                arrayModelo[j+1] = bModelo

            let aAno = arrayAno[j+1]
            let bAno = arrayAno[j]
                arrayAno[j] = aAno
                arrayAno[j+1] = bAno
           
            let aValor = arrayValor[j+1]    
            let bValor = arrayValor[j]
                arrayValor[j] = aValor
                arrayValor[j+1] = bValor
        }
    }
}
console.log(`[${arrayModelo}]  [${arrayAno}]  [${arrayValor}]`)