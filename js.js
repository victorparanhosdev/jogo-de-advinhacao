let numerRandomico = Math.round(Math.random() * 10)

let inputNumber = document.querySelector('#btn-numero')
let botaoTentar = document.querySelector('#btn-tentar')
let botaJogarNovamente = document.querySelector('#btn-jogar-novamente')

botaJogarNovamente.addEventListener("click", jogarnovamente)
botaoTentar.addEventListener("click", rodarjogo)

let contagem = 1

function jogarnovamente(){
    document.querySelector('.caixa-2').classList.add("hide")
    document.querySelector('.caixa-1').classList.remove("hide")

}
function rodarjogo(){



    if(inputNumber.value > 10 || inputNumber.value < 0) {
        alert("Escolha Números entre 0 e 10")
        inputNumber.value = ''

    } else if(Number(inputNumber.value) == numerRandomico) {
        document.querySelector('.texto-tentativa').innerText = `Acertou em ${contagem} ${plural(contagem)}`
        document.querySelector('.caixa-2').classList.remove("hide")
        document.querySelector('.caixa-1').classList.add("hide")
        numerRandomico = Math.round(Math.random() * 10)
        inputNumber.value = ''
        contagem = 1

    }else {
        inputNumber.value = ''
        contagem++
    }


}

function plural(a) {

    if(a == 1){
        return 'tentativa'
    }else {
        return 'tentativas'
    }
}




