


class Pedidos {

    limpiarItems(event){
        $("#pedidos tr").remove(); 
        
    }

    ventanaPedido (cuad){
        const pedidos = document.getElementById('pedidos');
        const contenedorDos = document.createElement('tr');
       

        contenedorDos.innerHTML = `
        
            <tr id="${cuad.id}" class='item_carrito'>
                <img src="${cuad.imagen}" width=100 height=100></img>
                <td> <input id="stock_${cuad.id}" class="conteo" type="number" min="1" max="500" value="1" style="text-align: center"> </td>
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
                sessionStorage.clear();
                removId.remove();
                
            

            })
        }

        
    
        let conteo = document.getElementsByClassName('conteo');

        let precio = document.getElementById('precio');
        let total = document.getElementById('total');

        
        total.innerHTML = "Total: " + precio.innerHTML*precio;


        
        $('#botonDel').click(function(){
            $('#notifica').hide();
        }) 

        /* Evento CLEAN = Vacia Carrito y desaparece Notificación de Compra
        $('#vaciar').click(function(){
            $("#pedidos tr").remove();  ////////////////////// funcion vaciar
            $('#notifica').hide();
            carrito = null;
        })
        */
    }


}
