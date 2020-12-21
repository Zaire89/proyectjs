
//DATA BASE

// Objeto constructor - estructura base de datos
class Cuadros {

  constructor(id, nombre, precio, stock, imagen){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;

  }
  

}


// Función para q Base de Datos recorra la estructura Objeto Constructor y cree uno nuevo
class dB {
  // hay q declarar el parámetro dataBase para que tome el jSON!!
  getCuadros(dataBase){

      // hay q crear una variable global dentro d esta función
      let cuadros;

      cuadros = dataBase.map(function(value){
      return new Cuadros(value.id, value.nombre, value.precio, value.stock, value.imagen, value.boton);
      
    })
    
    return cuadros;
    
  }
  
}
  
