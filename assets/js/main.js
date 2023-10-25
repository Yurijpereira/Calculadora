const display = document.querySelector("input#display")

function reinicia() {
    display.value = ""
}

function recebeValor(valor) {
    display.value += valor
}

function deleta() {
    display.value = display.value.slice(0, -1)
}

function calcular() {
    let resultado = eval(display.value)
    display.value = resultado
}
