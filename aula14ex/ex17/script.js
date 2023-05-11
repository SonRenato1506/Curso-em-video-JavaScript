var n
var res = document.getElementById('res')
function contar() {
    res.innerHTML = ""
    n = document.getElementById('num')
    n = Number(n.value)
    c = 1
    while (c <= 10) {
        res.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
        c++
    }
}