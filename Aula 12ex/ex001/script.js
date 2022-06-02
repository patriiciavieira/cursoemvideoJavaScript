function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imagem.src = 'fotomanha.webp'
        document.body.style.background = '#edc42d'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        imagem.src = 'fototarde.webp'
        document.body.style.background = '#b1624d'
    } else {
        //BOA NOITE!
        imagem.src = 'fotonoite.webp'
        document.body.style.background = '#5b2517'
    }
}
