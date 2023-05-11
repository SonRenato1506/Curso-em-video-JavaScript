var n
var c
var res = document.getElementById('res')
function contar() {
    res.innerHTML = ""
    n = document.getElementById('num')
    n = Number(n.value)
    while (c <= 10) {
        res.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
        c++
    }
}