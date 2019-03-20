# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

    Hay dos razones principales por las que no funciona en IE.
    En primer lugar, IE no soporta arrow functions.
    En segundo lugar, IE no soporta muchas características de ES6, como lo son las promesas.
    Hay varias soluciones para resolver esto último:
    - Usar un transpilador, como Babel.
    - Usar librerías que permiten utilizar Promises en cualquier navegador. Por ejemplo, Bluebird.
    
    Para solucionarlo, en el fichero test.js he quitado los arrow functions y he creado un index.html que incluye la librería Bluebird de la que hablo.