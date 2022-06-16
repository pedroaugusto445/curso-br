function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passos = window.document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length === 0) {
        window.alert('seus dados estao errados por favor fasa de novo')
    } else {
        res.innerHTML += ('')
    }

}