let valorBase = parseFloat(prompt("Ingrese el precio del juego base"));
let valorDescuento = parseFloat(prompt("Ingrese el valor del descuento (ej: 10, 25, 50)"));
let valorImpuesto = 1.75;


// Incorporación de arrays
let juego = ["Terraria", valorBase, valorDescuento]

function descuento(num1,num2,num3){
   let res1 = num1 * ((100 - num2) / 100);
   let res2 = res1 * num3;
   console.log (res1); //Precio base luego de aplicar el descuento
   document.write ("<br>")
   document.write ("El precio final de " + juego[0] + " es " + res2); //Precio final luego del descuento y el impuesto
}

descuento(valorBase,valorDescuento,valorImpuesto)

 // El proyecto final va a ser de una especie de web donde uno puede agregar juegos en oferta (o no) a un carrito y le daría el precio final total teniendo
 // en cuenta impuestos y demás. Me conviene mas adelante crear un array con, por ejemplo, todos los nombres y otro con todos los precios base para ir
 // armando varias cards?


