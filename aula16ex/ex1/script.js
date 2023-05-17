var val = document.querySelector('#val')
var res = document.querySelector('#res')
var num
var c = 0
var maior = 0
var menor = 101
var soma = 0
var media

function Adcionar() {
    num = document.getElementById('num').value
    if (num > 0 && num <= 100) {
        val.innerHTML += `Valor ${num} adcionado <br>`
        c++
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
        soma += Number(num)
    }
    else {
        alert("Número Inválido!")
    }
}

function Finalizar() {
    media = soma/c
    res.innerHTML = ""
    res.innerHTML += `Ao todo, temos ${c} números cadastrados!<br>`
    res.innerHTML += `O maior valor válido é ${maior}<br>`
    res.innerHTML += `O menor valor válido é ${menor}<br>`
    res.innerHTML += `A soma dos valores é de ${soma}<br>`
    res.innerHTML += `A média dos valores é ${media}<br>`
}