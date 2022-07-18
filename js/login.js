document.addEventListener('DOMContentLoaded', function() {

const usuariook = 'leandrodanko'
const passok = 'prueba123456'

let usuario = document.getElementById('userlog')
let contrasena = document.getElementById('passlog')
let logbtn = document.getElementById('submitButton')

logbtn.addEventListener('click', (e)=> {
    e.preventDefault()
    const datoslog = {
        usuariolog: usuario.value,
        contralog: contrasena.value,
    }
    if(datoslog['usuariolog'] === usuariook & datoslog['contralog'] === passok){
        window.location.replace('../pages/back.html')
    }
    else{
        Swal.fire(
            'Usuario Incorrecto',
            'Por favor verifique los datos e inténtelo nuevamente.',
            'error'
        )
    }
})

}, false);