// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà 
// diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte 
// settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.


let soccerSquads = [
  { name: "Juventus", points: 0, fouls: 0 },
  { name: "Milan", points: 0, fouls: 0 },
  { name: "Inter", points: 0, fouls: 0 },
  { name: "Roma", points: 0, fouls: 0 },
  { name: "Napoli", points: 0, fouls: 0 },
  { name: "Lazio", points: 0, fouls: 0 },
  { name: "Atalanta", points: 0, fouls: 0 },
  { name: "Fiorentina", points: 0, fouls: 0 },
  { name: "Torino", points: 0, fouls: 0 },
  { name: "Sampdoria", points: 0, fouls: 0 }
];

const {name,points,fouls} = soccerSquads;

soccerSquads.forEach((curSquad)=>{
  const randNum = Math.floor(Math.random() * 100) + 1;;
  const randNum2 = Math.floor(Math.random() * 100) + 1;;

  curSquad.points = randNum;
  curSquad.fouls = randNum2;

});

const squadInfo = soccerSquads.map(({name,fouls})=>({name,fouls}));
console.log(squadInfo);