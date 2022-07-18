document.addEventListener('DOMContentLoaded', function() {

let URL = 'https://casa-danko-api-default-rtdb.firebaseio.com/'


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
            Swal.fire({
                icon: 'error',
                title: 'Queremos saber como te llamas :D',
                text: 'Por favor completa el campo Nombre, e inténtalo nuevamente.',
                })
        }
        
        else if(inputmail.value === '' || inputmail.value === null || inputmail.value === 'undefined') {
            Swal.fire({
                icon: 'error',
                title: 'Sigamos en contacto!',
                text: 'Por favor completa tu e-mail, e inténtalo nuevamente.',
                })
        }

        else if(inputtel.value === '' || inputtel.value === null || inputtel.value === 'undefined') {
            Swal.fire({
                icon: 'error',
                title: 'Sigamos en contacto!',
                text: 'Por favor completa tu teléfono, e inténtalo nuevamente.',
                })
        }

        else if(inputmsg.value === '' || inputmsg.value === null || inputmsg.value === 'undefined') {
            Swal.fire({
                icon: 'error',
                title: 'Queremos conocer tu opinión!',
                text: 'Por favor escribe un mensaje, e inténtalo nuevamente.',
                })
        }

        else (
            Swal.fire(
                'Muchas gracias!',
                'Ya registramos tus datos, y a la brevedad nos comunicaremos.<br>Que tengas un buen día! :D',
                'success'
                )
            // alert(inputnombre.value + ', se guardaron tus datos! A la brevedad te contactaremos.')
            )
        }
    )

    submit.addEventListener('submit', (e) => {
        console.log(e.target[0].value, e.target[1].value, e.target[2].value)
        fetch(URL + `Clientes.json`, {
            method: 'POST',
            body: JSON.stringify({ nombre: e.target[0].value, mail: e.target[1].value, telefono: e.target[2].value }),
            Headers: { 'Content-type': 'application/json;charset=UTF-8' },
        })
            .then((resp) => resp.json())
            .then((data) => contactForm.innerHTML = `Tu registro se completo bajo el ID: ${data.name}`)
    })



}, false);