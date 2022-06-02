function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML='Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            //Contagem crescente
            for(let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }  
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}