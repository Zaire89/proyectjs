

// método d Jquery (con 2 parámetros URL, {objeto c opciones}) Iria la URL de API
// (traemos los datos del archivo Json) - funcion que recibe los datos
fetch('dataBase.json')
   .then(function (res){
   
   let dataBase
   res.json().then(function (datitos){
         dataBase = datitos
     
         console.log(dataBase)


      // Icono SHOP que muestra las compras selecionadas y cambia color
      var blan = false; 
      $('#carrito-oculto').click(function() {
         var anaran = $('#logo-carro'); 

         if ( blan) {
            $('#carrito-visible').toggle('slow');
            anaran.css("color", "#ffffff");
         }else {
            $('#carrito-visible').toggle('slow');
            anaran.css("color", "rgb(255, 163, 77)");
         }

         blan = !blan;
            // devuelve true
      });


      
      //  SUBE info inferior oculta de footer al hacer mouseover en linea naranja
      $('footer').mouseenter(function(){
         $(this).animate({height: '80px'});
         $('#footer-over').slideDown();
         //$('section').css('top','-50')        Q SUBA EL FOOTER P LEER TODO LO OCULTO cuando esta en 1024px -en mobil se ve bien-
      })

      $('footer').mouseleave(function(){
         $('#footer-over').slideUp();
      })

      
      


            // 0 - Declaraciones de variables GLOBALES
            var carrito = []; // div con la cuad seleccionada

            const listaProductos = document.getElementById("lista-productos");
            listaProductos.innerHTML = "";
            let contenedor = "";


            // variable dond se almacena el nuevo constructor
            let data = new dB()
            // variable q almacena el nuevo constructor basado con la info de Base d Datos
            let cuadros = data.getCuadros(dataBase)
            //console.log(dataBase)





            // Obtener productos seleccionadas anterioment, al abrir pág.
            if (sessionStorage.getItem("carrito")) {
               carrito = JSON.parse(sessionStorage.getItem("carrito"))
            } else {
               carrito = []  

            }




            // 1ro el CÓMO ejecutar - Recorriendo listado para relacionar c/ cosa.
            cuadros.forEach((cuad) => {

               // Asignar al ID ListaProductos la var 'contenedor' antes declarada.
               listaProductos.innerHTML = contenedor;
               // CONCATENAR variable 'contenedor' con función ListadoProductos.
               contenedor += listadoProductos(cuad)
            
                           // 2do QUÉ elementos - Función lectura de listado cuadros en HTML
               function listadoProductos(cuad) {
                  //for (var i=0; i<cuadros.length; i++){     ---- for p/ el último Id q no toma, no funciona.
                     if (!cuad){
                        return
                     }
                     var codeHtml = `
                     <div id='${cuad.id}' class="card m-3">
                           <img class="card-img-top" src='${cuad.imagen}' alt="Card image cap">
                           <div class="card-body" >
                              <h5 class="card-title">${[cuad.nombre]}</h5>
                              <p> $${[cuad.precio]} </p>
                              <button type="button" class="select"> I want it! </button>
                           </div>
                     </div>
                  `;
                  return codeHtml;

                  //}



                  

               
               }
               listadoProductos()
                     
               
               
               let carritOculto = document.getElementById("carrito-oculto");
                   
               
                     
               // BOTÓN Añadir - declaración
               var btnADD = $('.select');

               // Evento I WANT iT! animación + Aparece Notificación de Compra
               $('.select').click(function(){
                  $(this).animate({height:"0px", width:"0px"},300);
                  $(this).animate({height:"41px", width:"90px"},300);
                  $('#notifica').show()
               })

               // BOTÓN Añadir - Función
               // Recorrido boton de array botones
               for (let button of btnADD){
                  
                  // En eventoClick dispara Función...
                  button.addEventListener("click", (event) => {
                     // var = elemento padre del click 
                  let cuadId = event.target.parentNode.parentNode.id;
                  // Encontrar y relacionar en listado cada data ID con su botón según en qué elemento padre esté
                  let cuad = cuadros.find(
                     (cuad) => cuad.id == cuadId

                     );

                     carrito.push(cuad);
                     console.log(cuad);


                     carrito.forEach(e => {
                        const pedidos = new Pedidos(cuad); 
                        pedidos.ventanaPedido(e);
                     
                        
                     })
                  
      

               


                  });



               }    

               // Almacena la compra en localStorage hasta q cierre navegador
               sessionStorage.setItem("carrito", JSON.stringify(carrito));
               console.log(sessionStorage)
               

               // Notificacion de carrito
               let notif = document.createElement('div');
               notif.innerHTML = `
                  <div id='notifica' style="position: absolute; z-index: 2" >
                  <div id='notificaNum' style="color: white">${[cuad.cantidadTotal]} X </div>
                  </div>
               `
               carritOculto.appendChild(notif);  


            });


         

        







      })






})

