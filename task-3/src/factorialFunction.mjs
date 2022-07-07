/**
 * @description performs the factorial calculation of the given number
 * @param {number} factorialNumber 
 * @returns number
 */
export function factorialFunction(factorialNumber) {
  if (isNaN(factorialNumber) || !Number.isInteger(factorialNumber) || factorialNumber < 0) {
    return 'Informe um número natural!';
  }
  
  if(factorialNumber === 0 || factorialNumber === 1){
    return 1;
  }
  
  return factorialNumber * factorialFunction(factorialNumber - 1);
}