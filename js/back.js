document.addEventListener('DOMContentLoaded', function() {

let URL = 'https://casa-danko-api-default-rtdb.firebaseio.com/'


//request para ver todos los clientes en la tabla
let btntctes = document.getElementById('verTCtes')
let fila =''
let contacto=''

btntctes.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(URL + `Clientes.json`)
    .then((resp) => resp.json())
    .then((data) => {
        //convertir data del fetch de objetos a array
        let clientes = Object.entries(data)
        console.log(clientes)
            //para cada objeto del array crear una fila que contenga los datos especificados en cada ruta
            for (i=0; i < clientes.length; i++) {
                fila += `<tr><td>${clientes[i][0]}</td><td>${clientes[i][1]['nombre']}</td><td>${clientes[i][1]['mail']}</td><td>${clientes[i][1]['telefono']}</td><td>${clientes[i][1]['contacto']}</td></tr>`
                }
        document.getElementById('tctestab').innerHTML = fila
        })
    })

//imput para añadir la condicion de contactado
let idcontacto = document.getElementById('idcontactado')
let contactook = document.getElementById('contactadobtn')

contactook.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e)
    console.log(idcontacto.value)
    let id = idcontacto.value
    fetch(URL+`Clientes/${id}.json`,{
        method:'PATCH',
        body:JSON.stringify({contacto: 'OK'}),
        headers: {'Content-type':'application/json;charset=UTF-8'},
    })
    .then((resp)=>resp.json())
    .then((data)=>{addDataMsg.innerHTML= `Cliente con id: ${id} marcado como "contactado"`})
})

//imput para borrar un contacto
let ideliminar = document.getElementById('ideliminado')
let eliminadook = document.getElementById('eliminadobtn')

eliminadook.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e)
    console.log(ideliminar.value)
    let id = ideliminar.value
    fetch(URL+`Clientes/${id}.json`,{method:'DELETE'})
    .then((resp)=>resp.json())
    .then((data)=>{addDataMsg.innerHTML= `Cliente con id: ${id} ha sido eliminado`})
})


}, false);
