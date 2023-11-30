/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   newNum = Math.pow(num,2);
   return newNum;
}

console.log(elevarAlCuadrado(8));

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   newNum = Math.pow(num,3);
   return newNum;
}

console.log(elevarAlCubo(5));

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   newNum = Math.pow(num, exponent);
   return newNum;
}

console.log(elevar(2,1));
console.log(elevar(2,8));

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   newNum = Math.round(num);
   return newNum;
}

console.log(redondearNumero(3.12));

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   newNum = Math.ceil(num);// Tu código:
   return newNum;
}
console.log(redondearHaciaArriba(2.2));

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   randomNum = Math.random();
   return randomNum;
}
console.log(numeroRandom());
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
