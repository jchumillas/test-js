# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
    El resultado de la consola sería cinco veces el valor 5.
    La razón es porque al haber un setTimeout, el cuál es asíncrono, cuando se ejecuta el console.log que hay dentro de este,
    el valor que en ese momento tiene la variable i es 5, puesto que en ese momento ya habrá acabado la ejecución del bucle.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
    Tan sencillo como eliminar el setTimeout.