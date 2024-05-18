//Task 1
function processArray(numbers) {
  return numbers.map(number => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const processedArray = processArray(inputArray);

console.log(processedArray);

