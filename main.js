document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.querySelector('.productos-container .productos');
    const form = document.querySelector('.forma form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto
        agregarProducto();
    });

    function agregarProducto() {
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const imagen = document.getElementById('imagen').value;

        // Crear contenedor del producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        // Crear imagen del producto
        const productoImg = document.createElement('img');
        productoImg.src = imagen;
        productoImg.alt = nombre;

        // Crear título del producto
        const productoTitulo = document.createElement('h2');
        productoTitulo.textContent = nombre;

        // Crear precio del producto
        const productoPrecio = document.createElement('p');
        productoPrecio.textContent = `Precio: ${precio}`;

        // Crear botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', () => {
            eliminarProducto(productoDiv);
        });

        // Añadir elementos al contenedor del producto
        productoDiv.appendChild(productoImg);
        productoDiv.appendChild(productoTitulo);
        productoDiv.appendChild(productoPrecio);
        productoDiv.appendChild(eliminarBtn);

        // Añadir el nuevo producto al contenedor de productos
        productosContainer.appendChild(productoDiv);

        // Limpiar el formulario
        form.reset();
    }

    function eliminarProducto(productoDiv) {
        productosContainer.removeChild(productoDiv);
    }
});
