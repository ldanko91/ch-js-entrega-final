CODERHOUSE JAVASCRIPT
COMISION - 30350
ALUMNO - Leandro Danko

Bienvenido a mi proyecto final!

Este sitio web, está basado en la web: www.casadanko.com.ar, 
que fue mi proyecto para el curso de Desarrollo Web.

Para este proyecto añadí funcionalidades a la página,
basadas en Javascript.

Además también se utilizó como recurso la Realtime Database,
de mi proyecto Casa Danko API en Google Firebase.
La URL es https://casa-danko-api-default-rtdb.firebaseio.com/

-----Funcionalidades:

---Interacción y formulario de contacto:
* En la landing de bienvenida se desplega un sweet-alert de bienvenida
e indicaciones de como utilizar el formato de contacto con swals.

*Además, la página almacena en el local storage los datos 
añadidos al formulario de contacto, los cuales permanecen
aún recargando la página, simulando un login.
Al presionar el botón salir del navbar, se libera la
memoria.

---CRUD de contactos:
*Utilizando como DB la mencionada Realtime Database
realizando un fetch Post desde el formulario de contacto en el
index.html

*El resto de las peticiones se manejan desde el Backoffice
al cual se accede desde el navbar del mismo index.html

*Entre estas funciones destaco la posibilidad de hacer Patch
añadiendo al post seleccionado mediante ID, un atributo nuevo.
Condicion de contactado = OK

---Backoffice:
*Se accede mediante la opción Ingreso Usuarios del index.html

Se redirecciona a una pantalla de login de muestra.
La pantalla de login de muestra no ofrece seguridad,
ya que se encuentran expuestos en el js, tanto el usuario
como password admitidos

user: leandrodanko
pass: prueba123456

Se realizó a efectos de simular el acceso al back.
A futuro se conectará a la API para validar usuarios mediante 
un listado previamente alojado en la DB.

* Desde el backoffice se puede interactuar con las diferentes
entradas de contacto, para leer los datos alojados, modificar
la condicion de contactado, y eliminar entradas.

*Para visualizar las entradas se realizó una tabla manipulada
por el js, que añade una row por cada entrada.
Para ello fue preciso manipular los datos que devuelve la API
ya que los mismos vienen en formato Object:Object
y no era posible trabajar correctamente con los datos.
Requirió para ello trabajo con arrays y objetos. 

* Hacia adelante la idea es utilizar el back para crear listados
de productos mediante formulario, y realizar y pushear backups
de la DB de la API.
Para esta entrega el fetch de los productos es local de un 
archivo js a otro.

---Cotizador de productos
Para variar la temática en cuanto a carritos de ventas
opté por realizar un diseño basado en arrays de objetos
y funciones que suman los valores de los atributos precio.

* Para ello se realiza un fetch de productos cargados mediante
clases en el archivo tanques.js

* Con los arrays recibidos, se alimentan variables del archivo
cotizador.js

* Mediante la captura de datos del formulario cotizador
se realizan bùsquedas en los arrays alojados localmente
mediante el id del producto.

* El resultado del atributo precio multiplicado por la cantidad
alimenta el resultado de 2 variables mediante funciones
- item cotizado
- total de cotizacion

* Con la información obtenida se va creando una lista de
items cotizados y un totalizador que ofrece el precio total
y opciones de pago.

* Para facilitar la utilización al usuario, se ofrece una
Tabla de productos, donde al cliquear el boton Ver productos
se completa mediante el codigo js con los objetos almacenados
en los arrays de Tanques y Vanitorys.
La metodología es similar a la tabla de contactos, con la 
diferencia que los datos en este caso son locales.

* A futuro, y siguiendo en el sentido que se explicó en 
backoffice, la idea es alimentar este cotizador desde
la API, fetcheando diferentes rubros y mayor cantidad
de artículos.

----------------------------

Gracias por visitar el proyecto!
Que tengas un buen día.

https://www.linkedin.com/in/leandro-ezequiel-danko-b0248094/