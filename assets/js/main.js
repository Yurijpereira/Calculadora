const display = document.querySelector("input#display")

function reinicia() {
    display.value = ""
}

function tela(valor) {
    const sinaisDuplicados = new RegExp(/[\+\-\*\/\.]$/)
    const ultimoCaractereSinal = sinaisDuplicados.test(display.value)
    const valorDigitadoSinal = sinaisDuplicados.test(valor)

    // caso o usuário inicie com um ponto, é adicionado zero antes
    if(display.value === '.'){
        display.value = '0.'
    }
    
    if (display.value === '/' || display.value === '*' || display.value === '+') {
        reinicia()
    }

    // evita sinais duplicados em seguida
    if (!ultimoCaractereSinal || !valorDigitadoSinal) {
        display.value += valor
    }
}

function deleta() {
    display.value = display.value.slice(0, -1)
}

function calcular() {
    let resultado = eval(display.value)
    
    // evita operações inválidas
    if(resultado === undefined){
        display.value = '0'
    } else if (resultado === Infinity || isNaN(resultado)) {
        alert("Operação matemática inválida")
        reinicia()
    } else {
        display.value = resultado
    }
}

console.log()