document.addEventListener('DOMContentLoaded', function() {

let inputnombre = document.getElementById('name')
    inputnombre.addEventListener('change',()=>{
        console.log('El nombre del cliente es: ' + inputnombre.value)
        localStorage.setItem("Nombre cliente",inputnombre.value)
    })

let inputmail = document.getElementById('email')
    inputmail.addEventListener('change',()=>{
        console.log('Su correo electrónico es: ' + inputmail.value)
        localStorage.setItem("Mail cliente",inputmail.value)
    })

let inputtel = document.getElementById('phone')
    inputtel.addEventListener('change',()=>{
        console.log('Su número de teléfono es: ' + inputtel.value)
        localStorage.setItem("Teléfono cliente",inputtel.value)
    })

let inputmsg = document.getElementById('message')
    inputmsg.addEventListener('change',()=>{
        console.log('Y nos dejó el siguiente mensaje:\n' + inputmsg.value)
    })



let submit = document.getElementById('contactForm')
    submit.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inputnombre.value === '' || inputnombre.value === null || inputnombre.value === 'undefined') {
            alert('Por favor completa el campo Nombre, e inténtalo nuevamente.')
        }
        
        else if(inputmail.value === '' || inputmail.value === null || inputmail.value === 'undefined') {
            alert('Por favor completa tu e-mail, e inténtalo nuevamente.')
        }

        else if(inputtel.value === '' || inputtel.value === null || inputtel.value === 'undefined') {
            alert('Por favor completa tu teléfono, e inténtalo nuevamente.')
        }

        else if(inputmsg.value === '' || inputmsg.value === null || inputmsg.value === 'undefined') {
            alert('Por favor escribe un mensaje, e inténtalo nuevamente.')
        }

        else (
            alert(inputnombre.value + ', se guardaron tus datos! A la brevedad te contactaremos.')
            )
        }
    )



}, false);