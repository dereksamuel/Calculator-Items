let login
let writte = document.getElementById('writte')
let history = document.getElementById('history')

function deleteAllTwo() {
    history.textContent = '//'
}

function mostrarEnPantalla(login) {
    var jojo = writte.textContent += login
    return jojo
}

function add(login) {
        mostrarEnPantalla(login)
}

function deleteAll() {
    writte.textContent = ''
}


function delete_one() {
    writte.textContent = writte.textContent.substr(1)
}

function raíz() {
    cont = 0
    let operacion = writte.textContent
    cont =  Math.sqrt(operacion)
    document.getElementById('writte').textContent = cont
}

function porcent() {
    let operandoa = writte.textContent
    cont = parseFloat(operandoa) / 100 
    document.getElementById('writte').textContent = cont
}

async function imprimirResultado() {
    history.textContent += ` ${writte.textContent}; `
    let resultado = eval(writte.innerHTML)
    writte.innerHTML = resultado
}
