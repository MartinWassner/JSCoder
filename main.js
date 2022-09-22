let boton0 = document.querySelector(".item0");
let boton1 = document.querySelector(".item1");
let boton2 = document.querySelector(".item2");

function textoBoton(numero) {
   numero.innerHTML = "Agregado";
}

let carro = document.querySelectorAll(".addCart");

let juegos = [
   {
      nombre: "Terraria",
      valor: 129,
      descuento: 25,
      inCart: 0
   },
   {
      nombre: "The Witcher 3",
      valor: 96,
      descuento: 50,
      inCart: 0
   },
   {
      nombre: "Fallout 3",
      valor: 315,
      descuento: 10,
      inCart: 0
   }
];

for (let i=0; i < carro.length; i++){
   carro[i].addEventListener("click", ()=>{
      carroNumero(juegos[i]);
      costoTotal(juegos[i])
   })
}

function carroNumeroCargado() {

   let juegoNumero = localStorage.getItem("carroNumero");

   if(juegoNumero){
      document.querySelector(".itemsCarrito span").textContent = juegoNumero;
   }
}

function carroNumero(juegos){

   let juegoNumero = localStorage.getItem("carroNumero");

   juegoNumero = parseInt(juegoNumero);

   if (juegoNumero){
      localStorage.setItem("carroNumero", juegoNumero + 1)
      document.querySelector(".itemsCarrito span").textContent = juegoNumero + 1;
   } else {
      localStorage.setItem("carroNumero", 1);
      document.querySelector(".itemsCarrito span").textContent = 1;
   }

   agregarItems(juegos);
}

function agregarItems(juegos){

   let carroItems = localStorage.getItem("juegosEnCarro");

   carroItems = JSON.parse(carroItems);

   if(carroItems != null) {
      if (carroItems[juegos.nombre] == undefined){
         carroItems = {
            ...carroItems,
            [juegos.nombre]: juegos
         }
      }
      carroItems[juegos.nombre].inCart += 1 
   } else{
      juegos.inCart = 1;      
      carroItems = {
         [juegos.nombre]: juegos
      }
   }
   localStorage.setItem("juegosEnCarro", JSON.stringify(carroItems))
}

function costoTotal(juegos) {

   let valorCarro = localStorage.getItem("valorFinal");   

   console.log("el costo total es, ", valorCarro);

   if(valorCarro != null){
      valorCarro = parseInt(valorCarro);
      localStorage.setItem("valorFinal", valorCarro + (juegos.valor * ((100 - juegos.descuento) / 100)) * 1.75)
   }else {
      localStorage.setItem("valorFinal", (juegos.valor * ((100 - juegos.descuento) / 100)) * 1.75);
   }

   document.getElementById("precioFinal").innerHTML = localStorage.getItem("valorFinal");

   document.getElementById("precioImpuesto").innerHTML = parseInt(valorCarro) - (juegos.valor * ((100 - juegos.descuento) / 100));
   //no se por que obtengo un null la primera vez que se le da click al boton de agregar al changuito, pero la segunda vez y demás anda perfecto
}

carroNumeroCargado();
