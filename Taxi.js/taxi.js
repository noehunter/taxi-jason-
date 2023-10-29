
let santeMental = 10;
let rosteur = ["anissa-wejdene", "ANGUISH — гуляю", "gambi-Hé HO", "keep there heads ringin -dr.dre", "l'aventurier - indochine"];
let feuxRouge = 30;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


while (feuxRouge > 0 && santeMental > 0) {

  feuxRouge--;

  
  let musiqueIndex = getRandomInt(0, rosteur.length);
  let musiqueEnCours = rosteur[musiqueIndex];

  
  if (musiqueEnCours === "anissa-wejdene") {
  
    santeMental--;
    console.log("Feu rouge #" + (30 - feuxRouge) + ": La musique en cours est anissa-wejdene. La santé mentale de Jonh est maintenant à " + santeMental);
  } else {
    console.log("Feu rouge #" + (30 - feuxRouge) + ": La musique en cours est " + musiqueEnCours);
  }

  
  console.log("Nombre de feux rouges restants : " + feuxRouge);
}


if (santeMental <= 0) {
  console.log("Jonh a explosé.");
} else {
  console.log("Jonh est rentré chez lui.");
}




