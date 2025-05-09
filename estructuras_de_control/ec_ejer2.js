let edad = parseInt(prompt("Ingrese su edad: "))

if (edad>=18){
    let cedula = parseInt(prompt("tiene cedula: 1.SI  2.NO"))
    if (cedula==1){
        let inscrita = parseInt(prompt("Esta inscrita su cedula: 1.SI  2.NO"))
        if (inscrita==1){
            document.writeln("cumple con todos los requisitos. Puede votar")
        }else document.writeln("no cumple con los requisitos. No puede votar")
    }else document.writeln("no cumple con los requisitos. No puede votar")
}else document.writeln("no cumple con los requisitos. No puede votar")
