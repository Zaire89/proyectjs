getCuadros();

let cuad = getCuadros()

var carrito = []; // div con la compra seleccionada

var confirma = document.getElementById("confirma"); //  boton confirma compra
var vaciar = document.getElementById("delete");  // boton vaciar compra

var listaProductos = document.getElementById("lista-productos");

var card01 = document.getElementById("1");
var imagen01 = document.getElementById("imgRio");
var title01 = document.getElementById("Rio");
var precio01 = document.getElementById("valor");


var card02 = document.getElementById("2");
var imagen02 = document.getElementById("imgRioo");
var title02 = document.getElementById("RioDos");
var precio02 = document.getElementById("valor02");


var card03 = document.getElementById("3");
var imagen03 = document.getElementById("Dance");
var title03 = document.getElementById("Dancer");
var precio03 = document.getElementById("valor03");


var card04 = document.getElementById("4");
var imagen04 = document.getElementById("Girlll");
var title04 = document.getElementById("Girl");
var precio04 = document.getElementById("valor04");


var card05 = document.getElementById("5");
var imagen05 = document.getElementById("CanUno");
var title05 = document.getElementById("SuperCan");
var precio05 = document.getElementById("valor05");


var card06 = document.getElementById("6");
var imagen06 = document.getElementById("CanDos");
var title06 = document.getElementById("GymCan");
var precio06 = document.getElementById("valor06");




var buttonsArray = document.getElementsByClassName("select");
for (button of buttonsArray) {
   button.addEventListener("click", (event) => {
      console.log(event.target.parentNode)
   })
}

// evento click 


// Add carrito
comprarCuadros()
function comprarCuadros() {
   button.addEventListener("click", () => {
      carrito.push(cuad);
      localStorage.setItem("carrito", JSON.stringify(carrito))
   })
   
}


function getPfromLocalStorage() {
var carfromlocal = localStorage.getItem("carrito");
console.log(carfromlocal);
}