let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")
let ciudad = prompt ("ingrese su cuidad")
let domicilio = prompt ("ingrese su domicilio")
let producto = prompt ("elija un producto televisor celular computadora")

if (producto == "televisor" || producto == "celular" || producto == "computadora" ) {
if (producto == "televisor"){
console.log ("televisor")
    let marca = prompt ("elija la marca de su televisor lg hitachi samsung")
    if (marca == "lg")
    console.log ("lg")
    if (marca == "hitachi")
    console.log ("hitachi")
    if (marca == "samsung")
    console.log ("samsung")
    alert ("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
}
if (producto == "celular"){
console.log ("celular")
    let marca= prompt ("elija la marca de su de su celular iphone samsung motorola")
    if (marca == "iphone")
    console.log ("iphone")
    if (marca == "samsung")
    console.log ("samsung")
    if (marca == "motorola")
    console.log ("motorola")
    alert ("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
} 
if (producto == "computadora"){
console.log ("computadora")
    let marca= prompt ("elija la marca de su computadora lenovo samsung hp")
    if (marca == "lenovo")
    console.log ("lenovo")
    if (marca== "samsung")
    console.log ("samsung")
    if (marca == "hp")
    console.log ("hp")
    alert("felicitaciones " + nombre + " " + apellido + " ha adquirido un/a " + producto + " marca " + marca + " sera enviado a " + domicilio + " en la ciudad de " + ciudad)
} 
}else {
    alert (nombre + " " + apellido + " el producto que usted desea comprar no existe ")
}
