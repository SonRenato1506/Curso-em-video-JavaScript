var start = document.getElementById('start')
var end = document.getElementById('end')
var jump = document.getElementById('jump')
var res = document.getElementById('res')

function contar() {
    start = Number(start.value)
    end = Number(end.value)
    jump = Number(jump.value)
    if (jump = 0) {
        res.innerHTML("Salto inválido")
    }
    var c = start
    while(end >= c) {
        res.innerHTML += c + "/u{1F449}"
        c = c + jump
    }
    res.innerHTML += '/u{1F3C1}'
}