let salario = parseInt(prompt("ingrese su salario"))

if (salario<1000000){
    let mM=salario*0.01
    document.writeln("el impuesto a pagar es: " + mM)
}else if(salario>=1000000 && salario<2000000){
    let uyd=salario*0.03
    document.writeln("el impuesto a pagar es: " + uyd)
}else if(salario>=2000000 && salario<4000000){
    let dyc=salario*0.05
    document.writeln("el impuesto a pagar es:" + dyc)
}else if(salario>=4000000 && salario<10000000){
    let cyd=salario*0.07
    document.writeln("el impuesto a pagar es:" + cyd)
}else if(salario>=10000000){
    let Md=salario*0.1
    document.writeln("el impuesto a pagar es:" + Md)
}