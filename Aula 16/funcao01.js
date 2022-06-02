function parimp(n) {
    if(n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let res = parimp(11)
console.log(res)

//ou posso escrever na tela sem utilizar variável:
console.log(parimp(11))