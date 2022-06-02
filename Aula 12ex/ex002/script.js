function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','menino.webp')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src','garoto.webp')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','homem.webp')
            } else {
                //idoso
                img.setAttribute('src','idoso.webp')
            }
        } else if (sexo[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','menina.webp')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src','garota.webp')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','mulher.webp')
            } else {
                //idoso
                img.setAttribute('src','idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}