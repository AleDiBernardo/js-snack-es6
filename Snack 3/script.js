// Snack 1:
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.




//Array di oggetti "automobili" con le chiavi
const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];


let autoBenzina = [];
let autoDiesel = [];
let auto = [];


automobili.forEach((curAuto)=>{
  if (curAuto.alimentazione === "benzina") {
    autoBenzina.push(curAuto)
  } else if (curAuto.alimentazione === "diesel") {

    autoDiesel.push(curAuto)
  } else {

    auto.push(curAuto)
  }
})

console.log(autoBenzina);
console.log(autoDiesel);
console.log(auto);
