1.1. Crear la Vista EJS para añadir y eliminar productos
Primero, necesitarás una página de EJS que muestre una lista de productos y permita añadir o eliminar productos. Te mostraré un ejemplo para cada acción:

Vista EJS para mostrar productos y botones para añadir y eliminar
Supongamos que tienes una lista de productos que quieres mostrar, y quieres añadir un formulario para agregar un producto y un botón para eliminar un producto.

ejs
Copiar código
<%- include("header") %> <!-- Incluir el encabezado común -->

<div class="container">
    <h1><%= title %></h1> <!-- Título dinámico -->

    <!-- Mostrar la lista de productos -->
    <h3>Productos</h3>
    <ul>
        <% productos.forEach(function(producto) { %>
            <li>
                <strong>Nombre:</strong> <%= producto.nombre %> <br>
                <strong>Precio:</strong> $<%= producto.precio.toFixed(2) %> <br>
                <form action="/products/delete/<%= producto.id %>" method="POST" style="display:inline;">
                    <button type="submit" class="btn btn-danger">Eliminar</button>
                </form>
            </li>
        <% }); %>
    </ul>

    <!-- Formulario para añadir un nuevo producto -->
    <h3>Añadir un nuevo producto</h3>
    <form action="/products/add" method="POST">
        <label for="nombre">Nombre del producto:</label>
        <input type="text" id="nombre" name="nombre" required><br><br>
        
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" required step="0.01"><br><br>

        <button type="submit" class="btn btn-primary">Añadir Producto</button>
    </form>
</div>

<%- include("footer") %> <!-- Incluir el pie de página común -->
2. Ruta en Express para añadir un producto
Ahora que tienes el formulario en EJS, necesitas definir las rutas en Express para manejar el añadir y eliminar productos.

Ruta para añadir un producto (POST)
const express = require("express");
const router = express.Router();

// Suponemos que los productos están almacenados en un array 'productos'
let productos = [];

router.post("/add", (req, res) => {
    const { nombre, precio } = req.body; // Extraemos los datos del formulario
    const nuevoProducto = {
        id: productos.length + 1,  // Generamos un ID para el nuevo producto
        nombre,
        precio: parseFloat(precio)  // Convertimos el precio a número flotante
    };
    productos.push(nuevoProducto); // Añadimos el producto al array
    res.redirect("/products"); // Redirigimos al listado de productos
});

module.exports = router;
3. Ruta en Express para eliminar un producto
Ruta para eliminar un producto (POST)

router.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id); // Extraemos el ID del producto a eliminar
    productos = productos.filter(producto => producto.id !== id); // Filtramos el producto por su ID
    res.redirect("/products"); // Redirigimos al listado de productos
});
router.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id); // Extraemos el ID del producto a eliminar
    productos = productos.filter(producto => producto.id !== id); // Filtramos el producto por su ID
    res.redirect("/products"); // Redirigimos al listado de productos
});
4. Conexión de rutas y vistas en Express
Finalmente, asegúrate de que las rutas se conecten con tu aplicación Express y que la vista EJS esté correctamente renderizada.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productosRouter = require("./routes/productos"); // Asegúrate de tener las rutas de productos

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // Para procesar formularios POST
app.use("/products", productosRouter); // Usar las rutas de productos

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
