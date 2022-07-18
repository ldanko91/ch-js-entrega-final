document.addEventListener('DOMContentLoaded', function() {

let nombre
let nombreLS = localStorage.getItem('Nombre cliente')

console.log(nombreLS || "Nombre de usuario aún no almacenado")

let mailCliente = localStorage.getItem('Mail cliente')

if (nombreLS === '' | nombreLS === null) {

    Swal.fire({
        icon: 'info',
        title: 'Bienvenido! Que bueno que estés por acá.',
        text: 'Por favor completa el formulario de contacto al pie de página y a la brevedad nos contactaremos! Tus datos quedarán almacenados la próxima vez que ingreses.',
        footer: '<a href="#contacto">Ir a Contacto!</a>'
    })

} else {

    nombre = nombreLS
    let saludo1 = document.createElement('div')
    saludo1.innerHTML = '<h2 text-white fw-bold ms-auto mb-2 mb-lg-0 drop">Bienvenido nuevamente ' + nombre + '!</h2>'

    let divsaludo = document.getElementById('navbar2')
    divsaludo.append(saludo1)

    let btnsalir = document.createElement('button')
    btnsalir.innerHTML = `<button class="btn btn-primary d-flex justify-content-end" id="btnSalir" type="submit">Salir</button>`

    let btnsalir1 = document.getElementById('navbar3')
    btnsalir1.append(btnsalir)

    let salirok = document.getElementById('btnSalir')
    salirok.addEventListener('click',(e)=>{
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
        })

    let saludo2 = document.createElement('div')
    saludo2.innerHTML = `<p class="d-flex justify-content-end">${mailCliente}</p>`

    let divsaludo2 = document.getElementById('navbar3')
    divsaludo2.append(saludo2)
    
    }



}, false);