//let nombre = "Terraria"
//let precio = 1020//document.getElementById("precioBase");
//let descuento = 5//document.getElementById("valorDesc");
const valorImpuesto = 1.75;


function valorJuegoFinal(num1,num2,num3){
   let res1 = num1 * ((100 - num2) / 100);
   let res2 = res1 * num3;
   
   return res2;
   
}

// function Juego (nombre, precio, descuento){
//    this.nombre = nombre;
//    this.precio = precio;
//    this.descuento = descuento;
// }
let boton0 = document.querySelector(".item0");
let boton1 = document.querySelector(".item1");
let boton2 = document.querySelector(".item2");

function textoBoton(numero) {
   numero.innerHTML = "Agregado";
}



// const juego1 = Juego("Terraria", 129, 25)
// const juego2 = Juego("The Witcher 3", 96, 50)
// const juego3 = Juego("Fallout 3", 315, 10)


document.getElementById("precioFinal").innerHTML = valorJuegoFinal();

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
   // console.log("voy a pagar", juegos.valor);
   let valorCarro = localStorage.getItem("valorFinal");
   valorCarro = parseInt(valorCarro)

   console.log("el costo total es, ", valorCarro);

   localStorage.setItem("valorFinal", (((juegos.valor * (100 - juegos.descuento)/100)*1.75)));

}

carroNumeroCargado();