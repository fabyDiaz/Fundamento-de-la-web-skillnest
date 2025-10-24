var personajesYMonstruosStrangerThings = [
    { id: 1,   nombre: "Once",           tipo: ["humano", "telequinético"], descripcion: "Una joven con habilidades telequinéticas." },
    { id: 2,   nombre: "Mike Wheeler",   tipo: ["humano"], descripcion: "Uno de los amigos cercanos de Will Byers, valiente y leal." },
    { id: 3,   nombre: "Dustin Henderson", tipo: ["humano"], descripcion: "Amigo de Mike, inteligente y carismático." },
    { id: 4,   nombre: "Lucas Sinclair", tipo: ["humano"], descripcion: "Otro amigo de Mike y Will, siempre alerta y listo para la acción." },
    { id: 5,   nombre: "Will Byers",     tipo: ["humano"], descripcion: "El niño que desaparece y es atrapado en el Mundo del Revés." },
    { id: 6,   nombre: "Jim Hopper",     tipo: ["humano"], descripcion: "Jefe de policía de Hawkins, comprometido en resolver misterios." },
    { id: 7,   nombre: "Joyce Byers",    tipo: ["humano"], descripcion: "Madre de Will, determinada a encontrar a su hijo desaparecido." },
    { id: 8,   nombre: "Jonathan Byers", tipo: ["humano"], descripcion: "Hermano mayor de Will, fotógrafo sensible y protector." },
    { id: 9,   nombre: "Steve Harrington", tipo: ["humano"], descripcion: "Popular chico de la escuela, inicialmente arrogante pero con un buen corazón." },
    { id: 10,  nombre: "Max Mayfield",   tipo: ["humano"], descripcion: "Nueva en Hawkins, se une al grupo de amigos y destaca por su valentía." },
    { id: 11,  nombre: "Billy Hargrove", tipo: ["humano"], descripcion: "Hermano abusivo de Max, con problemas de ira y comportamiento violento." },
    { id: 12,  nombre: "Demogorgon",     tipo: ["monstruo"], descripcion: "Criatura del Mundo del Revés, con pétalos de flor que abre para atacar." },
    { id: 13,  nombre: "Demodogs",       tipo: ["monstruo"], descripcion: "Versiones más pequeñas y ágiles del Demogorgon, con un comportamiento de manada." },
    { id: 14,  nombre: "Mind Flayer",    tipo: ["monstruo"], descripcion: "Entidad malévola que controla el Mundo del Revés y busca invadir el mundo real." },
    { id: 15,  nombre: "Dart",           tipo: ["monstruo"], descripcion: "Criatura D'Artagnan, un Demodog bebé cuidado por Dustin." },
    { id: 16,  nombre: "Nancy Wheeler",  tipo: ["humano"], descripcion: "Hermana mayor de Mike, inteligente y valiente." },
    { id: 17,  nombre: "Karen Wheeler",  tipo: ["humano"], descripcion: "Madre de Mike, Nancy y Holly, preocupada por su familia." },
    { id: 18,  nombre: "Scott Clarke",   tipo: ["humano"], descripcion: "Profesor de ciencias de la escuela secundaria de Hawkins, entusiasta y amigable." },
    { id: 19,  nombre: "Bob Newby",      tipo: ["humano"], descripcion: "Empleado en la tienda de electrónica, ingenioso y solidario con Joyce." },
    { id: 20,  nombre: "Martin Brenner", tipo: ["humano"], descripcion: "Científico del laboratorio, responsable de los experimentos con Eleven." },
    { id: 21,  nombre: "Ted Wheeler",    tipo: ["humano"], descripcion: "Padre de Mike, Nancy y Holly, dedicado pero algo ausente en la vida de sus hijos." },
    { id: 22,  nombre: "Scott Clarke",   tipo: ["humano"], descripcion: "Profesor de ciencias de la escuela secundaria de Hawkins, entusiasta y amigable." },
    { id: 23,  nombre: "Barb",           tipo: ["humano"], descripcion: "Amiga de Nancy, desaparece misteriosamente en la primera temporada." },
    { id: 24,  nombre: "Murray Bauman",  tipo: ["humano"], descripcion: "Periodista conspirativo, ayuda a Nancy y Jonathan a exponer la verdad." },
    { id: 25,  nombre: "Lonnie Byers",   tipo: ["humano"], descripcion: "Padre ausente de Will y Jonathan." }
];

for(var i=0; i<personajesYMonstruosStrangerThings.length; i++) {
    if(personajesYMonstruosStrangerThings[i].id > 10) {
        console.log(personajesYMonstruosStrangerThings[i].nombre);
    }
}

/*
Imprime en la consola (console.log) los nombres de los objetos 
personajesYMonstruosStrangerThings cuyo id es divisible por 5
*/
for(var i=0; i<personajesYMonstruosStrangerThings.length; i++){
    if(personajesYMonstruosStrangerThings[i].id % 5 == 0){
        console.log(personajesYMonstruosStrangerThings[i].nombre)
    }
}

/*
Imprime en la consola (console.log) los nombres de los objetos
ersonajesYMonstruosStrangerThings que tienen más de un tipo
*/
for(var i=0; i<personajesYMonstruosStrangerThings.length; i++){
    if(personajesYMonstruosStrangerThings[i].tipo.length > 1){
        console.log(personajesYMonstruosStrangerThings[i].nombre)
    }
}

/*
Imprime en la consola (console.log) los nombres de los personajes cuyo tipo sea “humano”
*/
for(var i=0; i<personajesYMonstruosStrangerThings.length; i++){
    if(personajesYMonstruosStrangerThings[i].tipo == "humano"){
        console.log(personajesYMonstruosStrangerThings[i].nombre)
    }
}


/*
 Imprime en la consola (console.log) el nombre de todos los personajes cuyo nombre 
 comience con la letra J
 */
for(var i=0; i<personajesYMonstruosStrangerThings.length; i++){
    if(personajesYMonstruosStrangerThings[i].nombre.charAt(0) == "J"){
        console.log(personajesYMonstruosStrangerThings[i].nombre)
    }
}

/*
Desafío adicional: Imprime en la consola /console.log) los nombres al revés de los personajes 
cuyo tipo sea “monstruo”
*/
var nombre = "";
var nombreAlreves= [];
var indice = 0;

for(var i=0; i<personajesYMonstruosStrangerThings.length; i++){
    if(personajesYMonstruosStrangerThings[i].tipo == "monstruo"){

        nombre = personajesYMonstruosStrangerThings[i].nombre;
        nombreAlreves = nombre.split('').reverse();
        console.log(nombreAlreves.join(''));
    }
}