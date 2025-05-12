let n1 = parseInt(prompt("ingrese un numero:"))
let n2 = parseInt(prompt("ingrese otro numero:"))
let sp = 0
let si = 0
let cont = 0

document.writeln("numeros pares entre" + n1 + " y " + n2 + " = " + "<br>")
for (let i=n1; i<=n2; i++){
    if(i%2==0){
        document.writeln(i)
        sp += i
    }
}
document.writeln("<br>" + "suma de los pares: " + "<br>" + sp + "<br>")

document.writeln("numeros impares entre" + n1 + " y " + n2 + " = " + "<br>")
for (let i=n1; i<=n2; i++){
    if(i%2!==0){
        document.writeln(i)
        si += i
        cont++
    }
}
let prom = si/cont
document.writeln("<br>" + "promediaje de los impares: " + "<br>" + prom)