//Comenzando con promesas vemos como cuando se gener un setTimeout se manda el código a ejecutar a una cola que espera que se ejecute todo el código inmediato y ahi ejecuta el 
//de la cola.

//Vemos como dice 0 milisegundos y está primero en la lista de ejecución pero al estar en timeout lo manda a la cola de espera
setTimeout(() => console.log("Evento 1"), 0);

//Ejecutamos código inmeditato
console.log("Evento 2");

//Usamos otro ejemplo de timeout con tiempo de espera
setTimeout(() => console.log("Evento 3"), 1000);

//Ejecutamos código inmeditato en un bucle para que veamos que aunque el bucle tenga un tiempo de ejecución mayor a los timeout igual espera por estar en cola
for (let i = 0; i < 10001; i++) {
    if (i === 10000) {
        console.log("Bucle for");
    }
}

//Que es una Promesa?
//Es un constructor que nos brinda ciertos metodos como, then, catch, All, race, resolve, reject