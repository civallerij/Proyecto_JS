//declaraciones

const productos = [producto1, producto2, producto3,producto4, producto5, producto6,producto7, producto8, producto9]


//query de elementos
const listaProductos = document.querySelector ("#listaProductos")

//funciones
const agregarAlCarrito = (e) => {
console.log (e.target.closest (".buttonAgregar").getAttribute (`data-id`))
}
const renderizarProductos = () => {
    productos.forEach ((prod)=> {
        const productosButton = document.createElement ("button")
        productosButton.classList.add ("buttonAgregar")
        productosButton.setAttribute ("data-id",prod.id)
        productosButton.innerHTML = `
        <div class="cardProducto">
            <img src="./imagenes/D_NQ_NP_975834-MLA51015201380_082022-V.jpg" alt="${prod.id}">
            <h3 class="nombreProducto">${prod.nombre}</h3>
            <h4 class="marcaProducto">${prod.marca}</h4>
            <h4 class="precioproducto">$ ${prod.precio}</h4>
          
        </div>`

        listaProductos.append (productosButton)
    })
    const productoButtons = document.querySelectorAll (".buttonAgregar")
    productoButtons.forEach ((button) => {
        button.addEventListener ("click", agregarAlCarrito )
    })
}


        
   


//eventlisteners


//ejecuciones
renderizarProductos()