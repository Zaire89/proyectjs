
// 0 - Declaraciones de variables GLOBALES
var carrito = []; // div con la cuad seleccionada

const listaProductos = document.getElementById("lista-productos");
listaProductos.innerHTML = "";
let contenedor = "";


// variable dond se almacena el nuevo constructor
let data = new dB
// variable q almacena el nuevo constructor basado con la info de Base d Datos
let cuadros = data.getCuadros()
console.log(cuadros)






// Icono SHOP qué muestra las compras selecionadas
$('#carrito-oculto').click(function() {
   $('#carrito-visible').toggle('slow');
});


 // Obtener productos seleccionadas anterioment, al abrir pág.
if (localStorage.getItem('carrito')) {
   carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
   carrito = [] 
}



// 1ro el CÓMO ejecutar - Recorriendo listado para relacionar c/ cosa.
cuadros.forEach((cuad) => {

   // Asignar al ID ListaProductos la var 'contenedor' antes declarada.
   listaProductos.innerHTML = contenedor;
   // CONCATENAR variable 'contenedor' con función ListadoProductos.
   contenedor += listadoProductos(cuad)
  


   // BOTÓN Añadir - declaración y función
   var btnADD = $('.select');
      // Recorrido boton de array botones
      for (let button of btnADD){
         // En eventoClick dispara Función...
         button.addEventListener("click", (event) => {
            // var = a 
         let cuadId = event.target.parentNode.parentNode.id;
         // Encontrar y relacionar en listado cada data ID con su botón según en qué elemento padre esté
         let cuad = cuadros.find(
            (cuad) => cuad.id == cuadId
            );
            carrito.push(cuad);
            console.log(cuad);

            // Almacena la compra en localStorage hasta q cierre navegador
            localStorage.setItem("carrito", JSON.stringify(carrito));
          
         });

         

      }    

      $('.select').click(function(){
         $(this).animate({height:"0px", width:"0px"},300);
         $(this).animate({height:"41px", width:"90px"},300);
      })


});


// 2do QUÉ elementos - Función lectura de listado cuadros en HTML
function listadoProductos(cuad) {
   //for (var i=0; i<cuadros.length; i++){     ---- for p/ el último Id q no toma, no funciona.

      var codeHtml = `
      <div id='${cuad.id}' class="card m-3">
              <img class="card-img-top" src='${cuad.imagen}' alt="Card image cap">
              <div class="card-body" >
                <h5 class="card-title">${[cuad.nombre]}</h5>
                <p> $${[cuad.precio]} </p>
                <button type="button" class="select"><h5> Want it! </h5></button>
              </div>
      </div>
   `;
   return codeHtml;

   //}


  
}
listadoProductos()








