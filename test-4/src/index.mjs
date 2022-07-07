function sumMultiples(maxValue) {
  let acc = 0;

  for (let index = 0; index < maxValue; index++) {
    if(index % 3 === 0 || index % 5 === 0){
      acc += index;
    }    
  }

  return acc;
}

const result = sumMultiples(10);

console.log(result);