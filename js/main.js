// PARA LA TERCERA PRE ENTREGA
// simulador de e-commerce de una tienda de galletitas

// Obtener el elemento del botón y los div de productos y carrito
const mostrarProductosBtn = document.getElementById('mostrarProductosBtn');
const productosDiv = document.getElementById('productos');
const carritoDiv = document.getElementById('carrito');
const precioTotalDiv = document.getElementById('precioTotal');

// Array para almacenar los productos seleccionados en el carrito
let carrito = [];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    // Obtener el contenedor de productos
    const productosDiv = document.getElementById('productos');

    // Obtener los productos del localStorage o usar una lista predeterminada
    let productos = localStorage.getItem('productos');
    if (!productos || !Array.isArray(JSON.parse(productos))) {
        // Si no hay productos en localStorage o no son un array válido, usar una lista predeterminada
        productos = [
            { nombre: "Galletas", precio: 1000 },
            { nombre: "Muffins", precio: 2000 },
            { nombre: "Tortas", precio: 5000 }
        ];
        // Guardar la lista predeterminada en localStorage
        localStorage.setItem('productos', JSON.stringify(productos));
    } else {
        // Convertir los datos del localStorage de JSON a un array
        productos = JSON.parse(productos);
    }

    // Mostrar los productos como tarjetas de Bootstrap en línea
    productos.forEach(producto => {
        // Crear la estructura de la tarjeta
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-3', 'd-inline-block', 'mr-2'); // Agregar clase para mostrar en línea
        cardDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <input type="number" id="cantidad-${producto.nombre}" class="form-control mb-2" placeholder="Cantidad">
                    <button class="agregarBtn btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
        `;

        // Agregar la tarjeta al contenedor de productos
        productosDiv.appendChild(cardDiv);

        // Agregar evento click al botón de agregar al carrito
        const agregarBtn = cardDiv.querySelector('.agregarBtn');
        agregarBtn.addEventListener('click', () => {
            const cantidadInput = cardDiv.querySelector(`#cantidad-${producto.nombre}`);
            const cantidad = parseInt(cantidadInput.value);
            if (cantidad > 0) {
                agregarAlCarrito(producto, cantidad);
                cantidadInput.value = ''; // Limpiar el valor del input después de agregar al carrito
            }
        });
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, cantidad) {
    const productoEnCarrito = carrito.find(item => item.producto.nombre === producto.nombre);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ producto, cantidad });
    }
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    carritoDiv.innerHTML = ''; // Limpiar el contenido anterior

    let precioTotal = 0; // Inicializar el precio total

    // Mostrar los productos en el carrito
    carrito.forEach(item => {
        const productoDiv = document.createElement('div');
        const precioProducto = item.producto.precio * item.cantidad; // Precio del producto individual
        productoDiv.textContent = `${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: $${precioProducto}`;
        carritoDiv.appendChild(productoDiv);
        precioTotal += precioProducto; // Sumar el precio del producto actual al precio total
    });

    // Mostrar precio total
    precioTotalDiv.textContent = `Precio final: $${precioTotal}`;
}


// Agregar evento click al botón de comprar
comprarBtn.addEventListener('click', comprarProductos);


// Función para comprar los productos en el carrito
function comprarProductos() {
    // Calcular el precio total
    let precioTotal = 0;
    carrito.forEach(item => {
        precioTotal += item.producto.precio * item.cantidad;
    });

    // Mostrar alerta con el precio final
    alert(`Gracias por tu compra! El precio total es: $${precioTotal}`);

    // Después de la compra, vaciar el carrito
    carrito = [];
    mostrarCarrito();
}


// Mostrar los productos al cargar la página
mostrarProductos();
console.log(mostrarProductos)