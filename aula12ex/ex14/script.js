function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutes = data.getMinutes()
msg.innerHTML = `Agora são ${hora} e ${minutes}`
    if (hora >= 0 && hora < 12) {
        img.src = "Imagens/manha.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora >= 12 && hora < 18) {
        img.src = "Imagens/tarde.jpg"
        document.body.style.background = "#b9846f"
    }
    else {
        img.src = "Imagens/noite.jpg"
        document.body.style.background = "#515154"
    }
}