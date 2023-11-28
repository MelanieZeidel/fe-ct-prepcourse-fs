/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   console.log(string);
}

// ⛔️ "X" e "Y" son números.

function suma(x,y) {
   // Retorna el resultado de su suma.
   console.log(x + y);
}

function resta(x,y) {
   // Retorna el resultado de la resta.
   console.log(x - y);
}

function divide(x,y) {
   // Retorna el resultado de su división.
   console.log(x / y);
}

function multiplica(x,y) {
   // Retorna el resultado de su multiplicación.
   console.log(x * y);
}

function obtenerResto(x,y) {
   // Obten el resto de la división de "x" entre "y".
   console.log(x % y);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

suma(2,3)