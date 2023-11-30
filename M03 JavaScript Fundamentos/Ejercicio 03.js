/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   if (x == y){
      return true;
   }
   else{
      return false;
   }
}
console.log('\nfunción son iguales.');
console.log(sonIguales(10,10)); //true
console.log(sonIguales(10,5)); //false

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   if (str1.length == str2.length){
      return true;
   }
   else{
      return false;
   }
}

console.log('\nfunción tienen la misma longitud.');
console.log(tienenMismaLongitud('hola', 'casa'));  //true
console.log(tienenMismaLongitud('hola', 'marmota')); //false

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   if (num < 90){
      return true;
   }
   else{
      return false;
   }
}

console.log('\nfunción nmenos que noventa.');
console.log(menosQueNoventa(95)); //false
console.log(menosQueNoventa(23)); //true

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   if(num>50){
      return true;
   }
   else{
      return false;
   }
}

console.log('\nfunción mayor que cincuenta.');
console.log(mayorQueCincuenta(45)); //false
console.log(mayorQueCincuenta(55)); //true

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   if (num % 2 === 0){
      return true;
   }
   else{
      return false;
   }
}

console.log('\nfunción es par.');
console.log(esPar(22)); //true
console.log(esPar(23)); //false

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   if (num % 2 != 0){
      return true;
   }
   else{
      return false;
   }
}

console.log('\nfunción es impar.');
console.log(esImpar(35)); //true
console.log(esImpar(32)); //false


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
