const carritoDiv = document.querySelector(".carrito");
const juegosDiv = document.querySelector(".listado")

const juegos = [
   {
      img: 'https://media.vandal.net/m/46558/terraria-20196289252376_6.jpg',
      nombre: "Terraria",
      valor: 129,
      descuento: 25,
      id: 1
   },
   {
      img: 'https://uvejuegos.com/img/caratulas/62984/The-Witcher-III-Wild-Hunt---Complete-Edition-Switch-EU.jpg',
      nombre: "The Witcher 3",
      valor: 96,
      descuento: 50,
      id: 2
   },
   {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgx--Pix9aKinU1FgPOesMj4oDlfYHwRUskd4oDGu8nhcBjUou-UnabRyMfObFlBfpYU4&usqp=CAU',
      nombre: "Fallout 3",
      valor: 315,
      descuento: 10,
      id: 3
   },
   {
      img: 'https://images.g2a.com/1080x1080/1x1x0/sid-meiers-civilization-v-steam-key-global/5c9cc90aae653af0ac604653',
      nombre: "Civilization V",
      valor: 395,
      descuento: 20,
      id: 4
   },
   {
      img: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/9/16/59ad49ec-a047-4fe3-9986-5b5a8b971226.png',
      nombre: "The Witcher 2",
      valor: 275,
      descuento: 70,
      id: 5
   },
   {
      img: 'https://uvejuegos.com/img/caratulas/54733/SQ_NSwitchDS_Limbo.jpeg',
      nombre: "LIMBO",
      valor: 490,
      descuento: 30,
      id: 6
   },
   {
      img: 'https://cdn-products.eneba.com/resized-products/onCZHtTMHdDpMNrmElj1znlk5aTAhFB24dBfS4nXLd4_350x200_1x-0.jpg',
      nombre: "Stray",
      valor: 1199,
      descuento: 5,
      id: 7
   },
   {
      img: 'https://uvejuegos.com/img/caratulas/46219/Project-Zomboid-B.jpg',
      nombre: "Project Zomboid",
      valor: 225,
      descuento: 10,
      id: 8
   },
   {
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202104/3018/x0cMtPaOTtUWRymojmrEjT9f.png',
      nombre: "Hotline Miami 2",
      valor: 180,
      descuento: 25,
      id: 9
   },
   {
      img: 'https://cdn.cdkeys.com/700x700/media/catalog/product/a/f/affeaf_10_16_18_.jpg',
      nombre: "Fallout New Vegas",
      valor: 170,
      descuento: 80,
      id: 10
   },
   {
      img: 'https://uvejuegos.com/img/caratulas/63599/Portada-Disco-Elysium-VJ.jpg',
      nombre: "Disco Elysium",
      valor: 440,
      descuento: 10,
      id: 11
   }
];

let carrito = [];

function crearCards() {
   juegos.forEach(juego=>{
      juegosDiv.innerHTML += `<div style="width: fit-content;  margin:10px; background-color:#1F7197; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <img src=${juego.img}></img>
      <h4 style="text-align:center;">${juego.nombre}</h4>
      <p style="margin-left:20%; display:inline; background-color:#0C2E3D; font-size: 24px; color:#89DBF5; padding:3px">$${juego.valor}</p> 
      <p style="display:inline; background-color:#4C6B22; color:#A4CC16; font-size:24px; padding:3px">%${juego.descuento}</p> 
      <button style="margin-left:15%; margin-bottom:20px; display:block; margin-top:20px;" class="btnCarrito" id="btn-agregar${juego.id}">Agregar al changuito</button>
      </div>`
   }) 
   funcionBoton();  
}
function funcionBoton(){
   juegos.forEach(el=>{
      document.querySelector(`#btn-agregar${el.id}`).addEventListener("click", ()=>{
         agregarAlCarrito(el)
      })
   })
}

function agregarAlCarrito(el){
   let existe = carrito.some(juegoSome=> juegoSome.id === el.id);
   if(existe===false){
      el.cantidad = 1;
      carrito.push(el);
   }else{
      let juegoFind = carrito.find(juego=> juego.id === el.id)
      juegoFind.cantidad++
   }
   carrito.push(el);
   console.log(existe);

   console.log(carrito);
   renderizarCarrito();
   Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: `Agregaste: ${el.nombre}`,
      showConfirmButton: false,
      timer: 1500
    })
}

 function renderizarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(juego=>{
       carritoDiv.innerHTML += `<div>

       <p class="itemsCarrito">Items en el carrito: ${juego.cantidad} </p>

       <img src="media/peepo-sad.gif" alt="" class="pepe">

       <p> ${juego.nombre} </p>

       <p>Precio final $${(juego.valor * juego.cantidad)*((100 - juego.descuento)/100)*1.75}</p>  

       <button style="margin-left:15%; margin-bottom:20px; display:block; margin-top:20px;" id="btn-borrar${juego.id}">Limpiar changuito</button>

       </div>`
    })
    borrarJuego()
}



 function borrarJuego(){
    carrito.forEach(juego=>{
       document.querySelector(`#btn-borrar${juego.id}`).addEventListener("click",()=>{
          let indice = carrito.findIndex(element=>element.id===juego.id)
          carrito.splice(indice, 1)
          renderizarCarrito()
       })
    })
 }


renderizarCarrito()
crearCards()
