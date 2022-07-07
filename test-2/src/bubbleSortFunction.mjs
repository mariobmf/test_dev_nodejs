export function bubbleSortFunction(items) {
  const quantityOfItems = items.length;

  let swapped = false

  for (let i = 0; i < quantityOfItems - 1; i++) {
    for (let index = 0; index < quantityOfItems - 1; index++) {
      if(items[index] > items[index + 1]){
        const temp = items[index];
        items[index] = items[index + 1];
        items[index + 1] = temp;

        // [items[index], items[index+1]] = [items[index+1], items[index]];
        
        swapped = true;
      }
    }
    if(!swapped){
      break;
    }
  }
  return items;
}