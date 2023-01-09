const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];

// 6.Aplicar un descuento del 5% si la compra es mayor de 50 €

let precioTotal = 0;

for (products of carrito) {
    precioTotal += products.price * products.count;
}

function descuento() {
    if (precioTotal >= 50) {
        console.log("El total de su compra es: " + (precioTotal - (precioTotal * 5) / 100));
    } else {
        console.log("El total de su compra es: " + precioTotal);
    }
}

descuento();


// 5.Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío"

// function envioGratis() {
// for (i = 0; i < carrito.length; i++) {
//     const productos = carrito[i];
//     if (productos.premium === false) {
//     return "Este pedido tiene gastos de envío";
//     }
// }
// return "Pedido sin gastos de envío";
// }

// console.log(envioGratis());


// 4.Filtrar por los productos que sean prime

// for (productos of carrito) {
//     if (productos.premium === true) {
//     imprimir (productos)
//     }
// }

// function imprimir (productos) {
//     console.log("---------------");
//     for (características in productos) {
//     console.log(características.toUpperCase() + ": " + productos[características])
//     }
// }


// 3.Calcular el total del carrito de la compra

// let precioTotal = 0;

// for (products of carrito) {
//     precioTotal += products.price * products.count;
// }

// console.log("El total de su compra es: " + precioTotal);


// 2.Eliminar el producto con id 54657 del carrito de la compra.

// for (productos of carrito) {
//     if (productos.id != 54657) imprimir(productos);
// }

// function imprimir (productos) {
//     console.log("---------------");
//     for (características in productos) {
//     console.log(características.toUpperCase() + ": " + productos[características])
//     }
// }


//1.Mostrar estructura y listar todos los productos del carrito.

// for (productos of carrito) {
//     imprimir (productos)
// }

// function imprimir (productos) {
//     console.log("---------------");
//     for (características in productos) {
//     console.log(características.toUpperCase() + ": " + productos[características])
//     }
// }
        