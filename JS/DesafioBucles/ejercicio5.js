/*
Factorial: Para este último desafío, 
necesitamos multiplicar todos los números del 1 al 20. Es decir, 
1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?
*/

var mult=1;
for(var i = 1; i<=20; i++){
    mult*=i;
}
console.log(mult);