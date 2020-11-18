var carrito = []; // div con la compra seleccionada

var listaProductos = $('#lista-productos');



let data = new dB
let cuadros = data.getCuadros()
console.log(cuadros)



// evento click 
var btnADD = $('.select');

btnADD.click(function(e){

   console.log(e.target.parentNode.parentNode)
      
   carrito.push(cuadros);
   localStorage.setItem("carrito", JSON.stringify(carrito))
   
})

var confirma = document.getElementById("confirma"); //  boton confirma compra
var vaciar = document.getElementById("delete");  // boton vaciar compra


if (localStorage.getItem('carrito')) {
   carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
   carrito = [] 
}


// Add carrito


/*comprarCuadros()
function comprarCuadros() {
   button.addEventListener("click", () => {
      carrito.push(cuad);
      localStorage.setItem("carrito", JSON.stringify(carrito))
   })
   
}*/





