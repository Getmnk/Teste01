function carregar() {
    var msg = window.document.getElementById('msg1')
    var foto1 = window.document.getElementById('imagem1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        foto1.src = "manha.webp"
        document.body.style.background = "#fbe58f"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        foto1.src = "tarde.webp"
        document.body.style.background = "#ffa608"
    } else {
        // BOA NOITE
        foto1.src = "noite.webp"
        document.body.style.background = "#a282b6"
    }
}
