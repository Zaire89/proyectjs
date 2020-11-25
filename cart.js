
const carritoVisible = document.getElementById("#carrito-visible tbody");



function carritoVisibleDiv(cuad){
   
    const contenedorDos = document.getElementById("tr");
    contenedorDos.innerHTML = `
        
    <tr id='${cuad.id}'>
        <td src='${cuad.imagen}'>dsffsdf</td>
        <td> $${[cuad.cantidad]} </td>
        <td> $${[cuad.precio]} </td>
    </tr>
    <h4>TOTAL: $${[cuad.total]}<h4>
    `;

    carritoVisible.appendChild(contenedorDos);
 
 
}


    