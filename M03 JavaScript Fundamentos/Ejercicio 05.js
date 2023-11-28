/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.if(num<0){
   if(num<0){
      console.log('El numero es negativo');
   }
   else if(num>0){
      console.log('El numero es positivo');
   }
   else{
      console.log(false);
   }

}
esPositivo(15);
esPositivo(0);
esPositivo(-2);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   console.log(str + '!');
}

agregarSimboloExclamacion('Hola amorrr');

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   console.log(nombre + ' ' + apellido);
}

combinarNombres('Melanie','Zeidel');

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   console.log('buenos dias ' + nombre +'. Espero que ande bien!');
}

obtenerSaludo('Leo');

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   area = alto * ancho;
   console.log(area);
}

obtenerAreaRectangulo(2,3);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   perimetro = lado*4;
   console.log(perimetro);
}

retornarPerimetro(4);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   area = ((base*altura)/2);
   console.log(area);
}

areaDelTriangulo(4,5);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   dolar = euro * 1.2;
   console.log(dolar);
}

deEuroAdolar(10);

function esVocal(letra) {
   if(letra.length > 1){
      console.log('Dato incorrecto. Por favor, ingrese una sola letra.');
   } else if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ){
      console.log('Es una vocal'); 
   } else{
      console.log('Dato incorrecto. Por favor, ingrese una letra vocal.');
   }
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
}

esVocal('ab');
esVocal('d');
esVocal('u');
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
