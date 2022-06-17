function tabuada() {
    let nu = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (nu.value.length == 0) {
        window.alert('seus dados estao errados escreva a tabuada ')
    } else {
        let n = Number(nu.value)  
        for (let c ;c = n; c <= tab) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c }`
            tab.appendChild(item)
            c++
        }

    }



}