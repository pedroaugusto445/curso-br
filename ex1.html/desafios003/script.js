let num = document.getElementById('num')
let fli = document.getElementById('list')
let rr  = document.getElementById('res')
let valores =  []

function inlist(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isnumero(n, l) {
    if (l.indexOf(Number(n)) != 1) {
        return true
    } else {
        return false
    }
}

function guardar() {
    if (isnumero(num.value) && !inlist(num.value, valores)) {
        window.alert('tudo ok')

    } else {
        alert('seus dados estao errados ou voce nao deixou alguma coisa em branco')
    }
}