

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

class dB {
  getCuadros(){
    //let prodObj = JSON.parse(dataBase);
    //let cuadros = prodObj.map(function(value){
      let cuadros = dataBase.map(function(value){
      return new Cuadros(value.id, value.nombre, value.precio, value.stock, value.imagen, value.boton);
      
    })
    
    return cuadros;
  
  }
  
}


/* simulador de base de datos */
const dataBase = [
  {
    "id": 1,
    "nombre": "Rio",
    "precio": 475,
    "stock": 89,
    "imagen": 'img/c01.jpg',
    "boton": 1,
  }, {
    "id": 2,
    "nombre": "Pao",
    "precio": 750,
    "stock": 43,
    "imagen": 'img/c02.jpg',
    "boton": 2,
  }, {
    "id": 3,
    "nombre": "Dancer",
    "precio": 695,
    "stock": 44,
    "imagen": 'img/c03.jpg',
    "boton": 3,
  }, {
    "id": 4,
    "nombre": "Girl",
    "precio": 400,
    "stock": 30,
    "imagen": 'img/c04.jpg',
    "boton": 4,
  }, {
    "id": 5,
    "nombre": "SuperCan",
    "precio": 400,
    "stock": 20,
    "imagen": 'img/c05.jpg',
    "boton": 5,
  }, {
    "id": 6,
    "nombre": "GymCan",
    "precio": 450,
    "stock": 30,
    "imagen": 'img/c06.jpg',
    "boton": 6,
  }];
  

