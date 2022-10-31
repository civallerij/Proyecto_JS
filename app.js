let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let ciudad = prompt ("ingrese su cuidad")
let domicilio = prompt ("ingrese su domicilio")
let producto = prompt ("elija un producto televisor celular computadora")

function productos () {
    console.log (producto)
}

let marca = ("marca")

function marcas () {
    console.log (marca)
}

if (producto == "televisor" || producto == "celular" || producto == "computadora") {
if (producto == "televisor"){
    productos ()
    let marca = prompt ("elija la marca de su televisor lg hitachi samsung")
    if (marca == "lg" || marca == "hitachi" || marca == "samsung")
    marcas()
    alert ("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
}
if (producto == "celular"){
    productos ()
    let marca = prompt ("elija la marca de su de su celular iphone samsung motorola")
    if (marca == "iphone" || marca == "samsung" || marca == "motorola")
    marcas()
    alert ("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
}
if (producto == "computadora"){
    productos ()
    let marca = prompt ("elija la marca de su computadora lenovo samsung hp")
    if (marca == "lenovo" || marca == "samsung" || marca == "hp")
    marcas()
    alert ("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
}
}else {
    alert (nombre + " " + apellido + " el producto que usted desea comprar no existe ")
} 


