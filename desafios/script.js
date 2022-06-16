function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passos = window.document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length === 0) {
        window.alert('seus dados estao errados por favor fasa de novo')
    } else {
        res.innerHTML += 'contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p == 0) {
            window.alert('conta em valida')
            p = 1
        }
            if (i < f) {
              for (let c = i ; c <= f ; c += p ){
                    res.innerHTML += `${c} \u{1F449}`        
                } 
            } else {
                for (let c = i; c >= f ; c -= p ) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }

    }

}