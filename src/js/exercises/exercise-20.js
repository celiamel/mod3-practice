/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function fibonacci(n) {
    const result = [0, 1];
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
}
console.log(fibonacci);

showContent(20, fibonacci);


