function soma (n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))

//caso somente um valor seja passado, atribuimos o valor 0 no parâmetro
function soma (n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(soma(2))

//se não for atribuído 0, o segundo valor que não foi passado será undefined e o resultado será NaN
function soma (n1, n2) {
    return n1 + n2
}
console.log(soma(3))