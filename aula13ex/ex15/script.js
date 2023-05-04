function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano').value
    var img = document.getElementById('imagem')
    var idade = (Number(ano) - Number(fAno))
    var mas = document.getElementById('mas')
    var fem = document.getElementById('fem')
    res = document.getElementById('res')
    if (idade < 0) {
        alert("Erro nos dados, tente novamente")
    }
    if (mas.value = true) {
        if (idade <= 3) {
            img.src = `imagens/bebe-homem.jpg`
        }
        else if (idade <= 12) {
            img.src = `imagens/criança-homem.jpg`
        }
        else if (idade <= 17) {
            img.src = `imagens/adolescente-homem.jpg`
        }
        else if (idade <= 34) {
            img.src = `imagens/jovem-homem.jpg`
        }
        else if (idade < 60) {
            img.src = `imagens/adulto-homem.jpg`
        }
        else {
            img.src = `imagens/idoso-homem.jpg`
        }
    }
    else if (fem.value = true) {
        if (idade <= 3) {
            img.src = `imagens/bebe-mulher.jpg`
        }
        else if (idade <= 12) {
            img.src = `imagens/criança-mulher.jpg`
        }
        else if (idade <= 17) {
            img.src = `imagens/adolescente-mulher.jpg`
        }
        else if (idade <= 34) {
            img.src = `imagens/jovem-mulher.jpg`
        }
        else if (idade < 60) {
            img.src = `imagens/adulta-mulher.jpg`
        }
        else {
            img.src = `imagens/idosa-mulher.jpg`
        }
    }
    else {
        alert("Erro nos dados")
    }
}