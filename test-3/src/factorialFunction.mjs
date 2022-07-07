export function factorialFunction(factorialNumber) {
  if (isNaN(factorialNumber) || !Number.isInteger(factorialNumber) || factorialNumber < 0) {
    return 'Informe um número natural!';
  }
  
  if(factorialNumber === 0 || factorialNumber === 1){
    return 1;
  }
  
  return factorialNumber * factorialFunction(factorialNumber - 1);
}
export function factorialWithReduce(factorialNumber) {
  if (isNaN(factorialNumber) || !Number.isInteger(factorialNumber) || factorialNumber < 0) {
    return 'Informe um número natural!';
  }
  
  if(factorialNumber === 0 || factorialNumber === 1){
    return 1;
  }
  
  return result = [...factorialNumber].reduce((acc,item) => {
    return acc * item;
  },1);
}