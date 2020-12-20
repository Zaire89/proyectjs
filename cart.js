var carrito = {}; // div con la cuad seleccionada
// Div del carrito con las compras seleccionadas
class Pedidos {


    


    totalPedido () {
        
        //   CALCULO TOTAL CARRITO
        
    }


    cleanPedido () {

        // BOTON CLEAN CARRITO
      //  funcion q permita volver a a gregar

    }


    confirmPedido () {

        // BOTON CONFIRMA CARRITO

    }




    ventanaPedido (cuad){
        const pedidos = document.getElementById('pedidos');
        const contenedorDos = document.createElement('tr');
       

        contenedorDos.innerHTML = `
        
            <tr id="${cuad.id}">
                <img src="${cuad.imagen}" width=100 height=100></img>
                <td> <input class="conteo" type="number" min="1" max="500" value="1" style="text-align: center"> </td>
                <td id="precio"> $${[cuad.precio]} </td>
                <td> <button type="button"  class="botonDel btn btn-dark mb-0 mr-3"> X </button> </td>
            </tr> 
                            
        `;
        
        pedidos.appendChild(contenedorDos);
        
        // evento click y comprar un cuadro
        let btnDel = document.getElementsByClassName('botonDel');
        for (let boton of btnDel) {
            boton.addEventListener('click', (event) => {
                let id = cuad['id'];
                let removId = event.target.parentNode.parentNode;
                removId.remove();
            

            })
        }

  
    
        let conteo = document.getElementsByClassName('conteo');
        

        console.log(conteo)

        /*let precFinal = conteo.reduce(
            (total, num => total + num.conteo, 0)
        )

        let total = document.getElementById('total');
        let precio = document.getElementById('precio');
        


        for (let num of conteo) {
            num = conteo.value;
            total.innerHTML = "Total: $ " + num*precio;
            
            console.log()
        }*/


        
        $('#botonDel').click(function(){
            $('#notifica').hide();
        }) 

        // Evento CLEAN = Vacia Carrito y desaparece Notificación de Compra
        // despues de clickear no se agrega otro al carrito ------------
        $('#vaciar').click(function(){
            contenedorDos.parentNode.remove(); ////////////////////// funcion vaciar
            $('#notifica').hide();
            return 
         })
    }
}
