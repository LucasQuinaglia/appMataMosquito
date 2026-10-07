var altura = 0
var largura = 0
var vidas = 1

//faz leitura do tamanho do body (onresize no body, pra toda vez que a tela for modificada, a posicao nao fioque fora da tela)
function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoJogo()

//posicao randomica de onde os mosquitos vao aparecer
function posicaoMosquito() {
    //remover mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //logica para afetar as vidas
        if (vidas > 3) {
            alert('perdeu')
        } else {
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
            vidas++
        }


    }

    //posicao randomica
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //controle para o mosquito nao sair da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //elemento html    
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    //logica para o clique no mosquito
    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito)
}

//aleatoriedade no tamanho do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//funcao apenas para inverter a imagem
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoB'
        case 1:
            return 'ladoA'
    }
}
