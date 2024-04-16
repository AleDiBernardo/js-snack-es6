// Scrivere una funzione che accetti tre argomenti, un array e
// due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la
// posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const a = 3,
  b = 8;
const array = [12, 32, 156, 43, 21, 67, 88, 43, 23, 25, 46];

const result = getArrayInterval(array, a, b);
console.log(result);

/**
 * creates a new array containing the elements of an input
 * array between a and b
 *
 * @date 4/15/2024 - 5:15:34 PM
 *
 * @param {[]} array
 * @param {number} a
 * @param {number} b
 * @returns {[]}
 */
function getArrayInterval(array, a, b) {
  const getArrayInterval = array.filter(
    (valore, indice) => indice > a && indice < b
  );

  return getArrayInterval;
}
