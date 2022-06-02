let num = [5, 8, 2, 9, 3]
num.push(1)    //adicionar elemento no array
num.sort()     //colocar os elementos em ordem crescente
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)       

//exibir elementos do array na tela sem [] e com uma formatação "bonita" através do método tradicional do percurso em vetores
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//um jeito mais simplificado de fazer é
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
