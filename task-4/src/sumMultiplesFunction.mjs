/**
 * @description returns the sum of all multiples of three and five up to the maximum given value
 * @param {number} maxValue 
 * @returns number
 */
function sumMultiplesOfThreeAndFive(maxValue) {
  let acc = 0;

  for (let index = 0; index < maxValue; index++) {
    if(index % 3 === 0 || index % 5 === 0){
      acc += index;
    }    
  }

  return acc;
}

export { sumMultiplesOfThreeAndFive };