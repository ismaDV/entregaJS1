// PARA LA SEGUNDA PRE ENTREGA
// simulador de e-commerce de una tienda de galletitas

// Ingresar nombre y saludarlo
let nombreIngresado = prompt ("Ingrese su Nombre");
function saludar (nombreIngresado) {
    alert ("hola, " + nombreIngresado + ", " + "Bienvenido a nuestra pagina" )
}
saludar(nombreIngresado)

//mostrarle en un alert las opciones para comprar
//const productos = [ galletitas,muffins,]

//let productos = 
//function mostrarProductos (productos) {
  //  alert ('Productos:\n\n' + productos)
//}
//mostrarProductos(productos)


// Definir productos como objetos con nombre, precio y cantidad disponible
let productos = [
    { nombre: "GALLETAS", precio: 300, cantidadDisponible: 100 },
    { nombre: "MUFFINS", precio: 1500, cantidadDisponible: 100 },
    { nombre: "TORTA", precio: 30000, cantidadDisponible: 0 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensaje += `${producto.nombre}: $${producto.precio} - Disponibles: ${producto.cantidadDisponible}\n`;
    });
    alert(mensaje);
}

// Función para realizar la compra de un producto
function comprarProducto(nombreProducto, cantidad) {

     // Convertir el nombre del producto ingresado por el usuario a mayúsculas
     nombreProducto = nombreProducto.toUpperCase();

    let producto = productos.find(prod => prod.nombre.toUpperCase()=== nombreProducto);
    if (producto) {
        if (producto.cantidadDisponible >= cantidad) {
            producto.cantidadDisponible -= cantidad;
            let total = cantidad * producto.precio;
            alert(`Has agregado al carrito de compra ${cantidad} ${nombreProducto} por un total de $${total}`);
        } else {
            alert(`Lo siento, no hay suficiente stock disponible para agregar al carrito ${cantidad} ${nombreProducto}`);
        }
    } else {
        alert("El producto seleccionado no está disponible.");
    }
}

// Ciclo para interactuar con el usuario hasta que decida salir
while (true) {
    mostrarProductos();
    let opcion = prompt("¿Qué producto deseas agregar al carrito? (Ingrese 'salir' para terminar)");
    if (opcion.toLowerCase() === "salir") {
        break;
    }

    let cantidad = parseInt(prompt(`¿Cuántos ${opcion} deseas agregar al carrito?`));
    comprarProducto(opcion, cantidad);
}
