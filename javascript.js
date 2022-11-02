function Clicou(){
    let aluno = window.document.getElementById ("nomedoaluno").value;
    let notamat = (window.document.getElementById ("notamat"))
    let notapot = (window.document.getElementById ("notapot"))
    let notahis = (window.document.getElementById ("notahis"))
    let notaing = (window.document.getElementById ("notaing"))
    let resultado = window.document.getElementById ("res")

    let calculo = Number(notamat.value) + Number(notapot.value) + Number(notahis.value) + Number(notaing.value)

    let resultadoFinal = calculo / 2

    resultado.innerHTML = `Calculando a nota final de <strong>${aluno}</strong> ` 

    if (resultadoFinal >= 5){
        resultado.innerHTML += `<p><strong> O Resultado final =</strong> <mark>${resultadoFinal}</mark>`
        resultado.innerHTML += `<p> ${aluno} está na média! \uD83D\uDE80  \uD83D\uDC4F        </p>`
    } else {
        resultado.innerHTML = `<p><strong>${aluno} está abaixo da média! \uD83D\uDE2C        </strong></p>`
        resultado.innerHTML += `<p> Esse aluno(a) precisa de ajuda... </p>`
        resultado.innerHTML += `<p> A média desse aluno foi <mark>${resultadoFinal}</mark></p>`
    }
}