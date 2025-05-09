let edad = parseInt(prompt("ingrese su edad"))

if (edad<5){
    document.writeln("Entrada gratis")
}else if(edad>=5 && edad<=18){
    document.writeln("valor a pagar: $5.000")
}else if(edad>18){
    document.writeln("valor a pagar: $10.000")
}