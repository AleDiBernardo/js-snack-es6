// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const resultElem = document.querySelector(".result");

const bikes = [
  { name: "Mountain Bike", weight: 12 },
  { name: "Road Bike", weight: 9 },
  { name: "City Bike", weight: 15 },
  { name: "BMX Bike", weight: 11 },
  { name: "Electric Bike", weight: 20 },
];


let lighter = bikes[0].weight, lighterBikeIndex = 0;


bikes.forEach((curBike, index) => {
  const { name, weight } = curBike;
  lighterBike(weight, index);
});


printResult();


/**
 * Function to find lighter bike
 * @date 4/15/2024 - 4:35:21 PM
 *
 * @param {number} currentWeight
 * @param {number} bikeIndex
 */
function lighterBike(currentWeight, bikeIndex) {
  if (currentWeight < lighter){
    lighter = currentWeight;
    lighterBikeIndex = bikeIndex;
  }
}



/**
 * Print the result to DOM
 * @date 4/15/2024 - 4:41:40 PM
 */
function printResult() {
    resultElem.innerHTML += `
    <span>${bikes[lighterBikeIndex].name} ${bikes[lighterBikeIndex].weight}</span>
`
}