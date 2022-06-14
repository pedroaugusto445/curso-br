function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('erro dados im corerdo')

    } else { 
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(pas)

        if (i < f) {
            for (c = i; c >= f; c += p)
            res.innerHTML += `${c} \u{F1449}`

        } else {
            for (let c = 1; c >= f; c -= p) {
                res.innerHTML += `${c} \u{F1449}`
            }
       
    } 
}

}