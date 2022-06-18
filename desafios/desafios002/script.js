function tabuada() {
    let nu = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (nu.value.length == 0) {
        window.alert('seus dados estao errados escreva a tabuada ')
    } else {
        let n = Number(nu.value)  
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`

            c++

        }

    }



}