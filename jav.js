

var remera1 = { nombre: "NiN", vendido:8, pedido:10};
var remera2 = { nombre: "Pearl Jam", vendido:10, pedido:2};
var remera3 = { nombre: "Deep Purple", vendido:8, pedido:8};
var remera4 = { nombre: "Fait no More", vendido:8, pedido:14 };


var arrayRemeras = [remera1, remera2, remera3, remera4];
Array.isArray(arrayRemeras);

var pregunta = prompt("Elija una remera: NiN, Pearl Jam, Deep Purple o Faith no More");
var cantidad = prompt("Cuántas remeras quiere?")  



function Comprando() {

    for (var i=0; i < arrayRemeras.length; i++) {
        if(arrayRemeras[i].nombre.toLowerCase().indexOf(pregunta.toLowerCase())) {
           
            console.log (pregunta)
            console.log (cantidad)
            alert("Encargaste: " + cantidad + " de remeras de " + pregunta)
            break; 
          
        } 
    }

    this.precio = 450;
    this.cantidad = cantidad;
    this.descuento = 0.40;
    this.total = (this.precio)*(this.cantidad);
    this.aplicardescuento = this.total-(this.total*this.descuento)


    for (var i=0; i < arrayRemeras.length; i++) {

        if(this.cantidad >= 10 ) {
            this.total = (this.precio)*(this.cantidad) - 0.40;
            alert("Tu compra es de: $ " + this.aplicardescuento + " Tienes un descuento del 40%!")
            console.log("cantidad: " + this.cantidad);
            console.log(this.cantidad*this.precio + " total");
            console.log(this.aplicardescuento + " con desucuento");
            break;

        } else if (this.cantidad < 10 ) {
            alert("Tu compra es de: $ " + this.total);
            console.log("cantidad: " + this.cantidad);
            console.log(this.total + " total");
            break;
        }
    } 
}

Comprando()