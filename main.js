let nombre = prompt("Ingrese el nombre del juego")
let precio = parseFloat(prompt("Ingrese el precio del juego base"));
let descuento = parseFloat(prompt("Ingrese el valor del descuento (ej: 10, 25, 50)"));
const valorImpuesto = 1.75;


// Incorporación de arrays de objetos
const juegos = []


function juego(nombre, precio, descuento){
   this.nombre = nombre;
   this.precio = parseFloat(precio);
   this.descuento = parseFloat(descuento); 
}


function valorJuegoFinal(num1,num2,num3){
   let res1 = num1 * ((100 - num2) / 100);
   let res2 = res1 * num3;
   
   if(isNaN(num1) || isNaN(num2)){
      
      alert("No dejes campos vacíos");
      
   }else {
      document.write ("<br>");
      document.write ("El precio final de " + nombre + " es " + res2); //Precio final luego del descuento y el impuesto
   }
   
   console.log (res1); //Precio base luego de aplicar el descuento
}
const juegoNuevo = new juego("Terraria", 200, 15);

valorJuegoFinal(precio,descuento,valorImpuesto);

function cargarJuegos(juego){
   return juegos.push(juego);
}

cargarJuegos(juegoNuevo)

console.log(juegos);

