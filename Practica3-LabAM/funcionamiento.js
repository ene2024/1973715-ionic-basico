const producto = document.getElementById("articulo-html");
const pago = document.getElementById("monto-html");
const texto = document.getElementById("articulos");


var monto = 0;
var articulo = '';
var total = 0;


function ticketCompra() {
    const nuevo_parrafo = document.createElement("p");

    articulo = producto.value;
    monto = parseInt(pago.value);

    nuevo_parrafo.innerText = articulo + " . . . . . . . .  $" + monto;
    texto.appendChild(nuevo_parrafo);

    total += monto;

    document.getElementById("Total").innerText = "Total : $" + total + " pesos";

    producto.value = '';
    pago.value = '';
}