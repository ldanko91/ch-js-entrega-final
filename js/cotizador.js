document.addEventListener('DOMContentLoaded', function() {

const rubroTanquesCoti = JSON.parse(localStorage.getItem("rubroTanques"))
const rubroVanitCoti = JSON.parse(localStorage.getItem("rubroVanitorys"))

let btntprods = document.getElementById('verTProds')
let fila =''

let btnadd = document.getElementById('btnagregar')
let rubrocot = document.getElementById('rubrocot')
let idcot = document.getElementById('idcot')
let cantcot = document.getElementById('cantcot')
let valoritem = 0
let totalcot = 0

function sumaitem (cant,precio) {
    valoritem = cant * precio
    
}
function sumacot (cant,precio) {
    totalcot = totalcot + (cant * precio)
    
}

// Funcion para exhibir los productos en la tabla de productos
btntprods.addEventListener('click', (e) => {
    e.preventDefault();
        for (i=0; i < rubroTanquesCoti.length; i++) {
        fila += `<tr><td>${rubroTanquesCoti[i]['rubro']}</td><td>${rubroTanquesCoti[i]['id']}</td><td>${rubroTanquesCoti[i]['nombre']}</td><td>${rubroTanquesCoti[i]['precio']}</td></tr>`
                    }
            document.getElementById('tprodtab').innerHTML = fila

        for (i=0; i < rubroTanquesCoti.length; i++) {
            fila += `<tr><td>${rubroVanitCoti[i]['rubro']}</td><td>${rubroVanitCoti[i]['id']}</td><td>${rubroVanitCoti[i]['nombre']}</td><td>${rubroVanitCoti[i]['precio']}</td></tr>`
                        }
                document.getElementById('tprodtab').innerHTML = fila
    })

// Formulario de cotizacion

btnadd.addEventListener('click', (e) => {
    e.preventDefault();
    if(rubrocot.value === 'Tanques') {
        let buscarprod = rubroTanquesCoti.find(function (el){
            return (el.id = idcot.value)
        })

        sumaitem(cantcot.value,buscarprod['precio'])
        sumacot(cantcot.value,buscarprod['precio'])
        
        let linea = document.getElementById('listaitems')
        linea.innerHTML += `<li><p>${cantcot.value} x ${buscarprod['nombre']} -- $ ${valoritem}</p></li>`
        
    
    } else if(rubrocot.value === 'Vanitorys') {
        let buscarprod = rubroVanitCoti.find(function (el){
            return (el.id = idcot.value)
        })
        
        sumaitem(cantcot.value,buscarprod['precio'])
        sumacot(cantcot.value,buscarprod['precio'])
        
        //Muestra en pantalla los ítems cotizados
        let linea = document.getElementById('listaitems')
        linea.innerHTML += `<li><p>${cantcot.value} x ${buscarprod['nombre']} -- $ ${valoritem}</p></li>`
    }
        });
        
// Muestra en pantalla el valor total de la cotizacion
btnadd.addEventListener('click', (e) => {
    e.preventDefault();
    let total = document.getElementById('totalcot')
    total.innerHTML = `<h3>El total cotizado es de $ ${totalcot}</h3><br>
                        <h4>Podés abonar on tarjetas de crédito<br>en 3 cuotas sin interés de<br>$ ${totalcot/3}</h4>
                        <h3>Abonando en efectivo obtenés un descuento y el total es $ ${totalcot-(totalcot/4)}</h3><br>`
})

}, false);

