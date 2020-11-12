

// Objeto
class Cuadros {

  constructor(id, nombre, precio, stock, imagen, boton){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
      this.boton = boton;

  }
 
}


function getCuadros() {
  var cuadros = dataBase.map(function(value){
    return new Cuadros(value.id, value.nombre, value.precio, value.stock, value.imagen, value.boton);
    
  })
  console.log(cuadros);
}
 

/* simulador de base de datos */
var dataBase = [
  {
    id: 1,
    nombre: "Rio",
    precio: 475,
    stock: 89,
    imagen: 'img/c01.jpg'
  }, {
    id: 2,
    nombre: "Pao",
    precio: 750,
    stock: 43,
    imagen: 'img/c02.jpg'
  }, {
    id: 3,
    nombre: "Dancer",
    precio: 695,
    stock: 44,
    imagen: 'img/c03.jpg'
  }, {
    id: 4,
    nombre: "Girl",
    precio: 400,
    stock: 30,
    imagen: 'img/c04.jpg'
  }, {
    id: 5,
    nombre: "SuperCan",
    precio: 400,
    stock: 20,
    imagen: 'img/c05.jpg'
  }, {
    id: 6,
    nombre: "GymCan",
    precio: 450,
    stock: 30,
    imagen: 'img/c06.jpg'
  }];
  

