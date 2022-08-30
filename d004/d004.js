function clicar(){
    let emj = document.getElementsByName('rad')
    let res = document.querySelector('div#res')

    if(emj[0].checked){
        res.innerHTML= `Acessar página <a href="d004a/d004a.html" target= "_blank"><input type="button" value= "Acessar"></input></a>`
    }if(emj[1].checked){
        res.innerHTML= `Acessar página <a href="d004b/d004b.html" target= "_blank"><input type="button" value= "Acessar"></input></a>`
    }if(emj[2].checked){
        res.innerHTML= `Acessar página <a href="d004c/d004c.html" target= "_blank"><input type="button" value= "Acessar"></input></a>`}
    if(emj[3].checked){
        res.innerHTML= `Acessar página <a href="d004d/d004d.html" target= "_blank"><input type="button" value= "Acessar"></input></a>`}
    }
