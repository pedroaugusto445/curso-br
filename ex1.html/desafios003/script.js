let num = window.document.getElementById('dd')
let list = window.document.getElementById('sele')
let res = window.document.getElementById('res')
let d = []

function inlista(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}

function isnumero(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true  
    } else {
        return false
    }
}

function guardar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        alert('seus dados estao errados')
    }
}