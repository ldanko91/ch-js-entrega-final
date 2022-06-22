document.addEventListener('DOMContentLoaded', function() {

let nombre

let nombreLS = localStorage.getItem('Nombre cliente')

console.log(nombreLS || "Nombre de usuario aún no almacenado")

let mailCliente =localStorage.getItem('Mail cliente')

if (nombreLS) {

    nombre = nombreLS
    let saludo1 = document.createElement('div')
    saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido nuevamente ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4>'

    let divsaludo = document.getElementById('saludos')
    divsaludo.append(saludo1)

    let saludo2 = document.createElement('div')
    saludo2.innerHTML = '<p>Bienvenido: </p>' + mailCliente

    let divsaludo2 = document.getElementById('navbar')
    divsaludo2.append(saludo2)

    let btnsalir = document.createElement('button')
    btnsalir.innerHTML = '<div class="d-grid"><button class="btn btn-primary" id="btnSalir" type="submit">Salir</button></div>'

    let btnsalir1 = document.getElementById('navbar')
    btnsalir1.append(btnsalir)

    let salirok = document.getElementById('btnSalir')
    salirok.addEventListener('click',(e)=>{
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
        })

} else {
        nombre = prompt("Hola! ¿Cómo es tu nombre?")
        if (nombre != '') {

        let saludo1 = document.createElement('div')
        saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4><br><h4 style="background-color: lightgrey">Por favor completa el formulario de contacto, y al recargar la página, tus datos quedarán almacenados.</h4>'

        let divsaludo = document.getElementById('saludos')
        divsaludo.append(saludo1)

        console.log("Nos visita por primera vez " + nombre)
        localStorage.setItem("nombre", nombre)
        }

        else if(nombre === '') {
        nombre = prompt("Aún no completaste tu nombre, por favor escríbelo para ver el saludo personalizado, o verás el saludo por defecto!")
        
        let saludo1 = document.createElement('div')
        saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4><br><h4 style="background-color: lightgrey">Por favor completa el formulario de contacto, y al recargar la página, tus datos quedarán almacenados.</h4>'

        let divsaludo = document.getElementById('saludos')
        divsaludo.append(saludo1)

        console.log("Nos visita por primera vez " + nombre)
        localStorage.setItem("nombre", nombre)
        }
    }

}, false);