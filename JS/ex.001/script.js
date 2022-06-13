function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var date = new Date()
    //var hora = data.getHours() 
    var hora = 15
    msg.innerHTML = `agora são ${hora} horas`
        
    if (hora >= 0 && hora< 12) {
        //bom dia
        img.innerHTML = '<img src="imagems/manha.jpg">'

    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="imagems/tarde.jpg">'

    } else {
        img.innerHTML = '<img src="imagems/noite.jpg">'
    } 
}