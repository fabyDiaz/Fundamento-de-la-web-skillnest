/*
Suma todos los números pares del 1 al 50: 
Utiliza un bucle para sumar todos los números pares del 1 hasta el 50 y
 muestra el resultado de la suma con console log.
*/
var suma = 0;
for(var i = 1; i<=50; i++){
    if(i % 2 == 0){
        suma+=i;
    }
}
console.log(suma);