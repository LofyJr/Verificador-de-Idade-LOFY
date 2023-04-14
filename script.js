function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(' [ERRO] - Verifique os dados e tente novamente!')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'Menininho.png')
            }else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'Jovem.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'Adulto.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'Idoso.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'Menininha.png')
            }else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'JovemF.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'Adulta.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}