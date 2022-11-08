
function Producto (nombre, marca, precio) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
}
const producto1 = new Producto ("televisor","lg",56000)
const producto2 = new Producto ("televisor","hitachi",62000)
const producto3 = new Producto ("televisor","samsung",70000)
const producto4 = new Producto ("celular","iphone",100000)
const producto5 = new Producto ("celular","motorala",90000)
const producto6 = new Producto ("celular","samsung",80000)
const producto7 = new Producto ("computadora","lenovo",85000)
const producto8 = new Producto ("computadora","samsung",76000)
const producto9 = new Producto ("computadora","hp",70000)

const productos = [producto1, producto2, producto3,producto4, producto5, producto6,producto7, producto8, producto9]

let producto = prompt ("elija un producto televisor celular computadora")

if (producto == "televisor" || producto == "celular" || producto == "computadora") {
    if (producto == "televisor"){
        const marcaProducto = prompt ("elija la marca de su televisor lg hitachi samsung")
        const filter2 = productos.filter ((productos)=> productos.marca === marcaProducto)
        console.log(filter2) }
    if (producto == "celular"){
        const marcaProducto = prompt ("elija la marca de su celular iphone motorola samsung")
        const filter2 = productos.filter ((productos)=> productos.marca === marcaProducto)
        console.log(filter2) }
    if (producto == "computadora"){
        const marcaProducto = prompt ("elija la marca de su computadora lenovo samsung hp")
        const filter2 = productos.filter ((productos)=> productos.marca === marcaProducto)
        console.log(filter2) }
    }   else {
        alert ("el producto que usted desea comprar no existe") }
    





