let pizza1 = {
    tipo: "estilo Chicago",
    tamano: "Familiar",
    tipoDeMasa: "Tradicional",
    queso:["mozzarella"],
    ingredientes: ["pepperoni", "salchicha"],  
};

function pizzaOven(tipo, tamano, tipoDeMasa, queso, ingredientes){
    let pizza = {};
    pizza.tipo=tipo;
    pizza.tamano = tamano;
    pizza.tipoDeMasa=tipoDeMasa;
    pizza.queso = queso;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pizza2 = pizzaOven("lanzada a mano", "familiar", "marinara", ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"]);
let pizza3 = pizzaOven("DoblePepperoni", "mediana", "tradicional", ["mozzarella"],["doble pepperoni"] );
let pizza4 = pizzaOven("Italiana", "extra grande", "delgada", ["mozzarella"], ["oregano", "pepproni", "salchicha italina", "aceitunas negras", "champiñones"]);

console.log(pizza1);