// ---------------------------------------
//        Assignment on basic javascript
//-----------------------------------------
// Problem 1 solution
// This is a function which is taking a number input. This task has multiple operations.validation is must.
function mindGame(number) {
  if (number < 0) {
  return "Please enter a positive number.";
  } else if (typeof number != "number") {
  return "Please enter a number.";
  }
  return (number * 3 + 10) / 2 - 5;
  }
  // const result = mindGame(5);
  // console.log(result);
  // Problem 2 solution
  // This is a function which is taking input string. This task is a Javascript string finding even or odd. validation is must.
  function evenOdd(str) {
  if (typeof str !== "string") {
  return "Input must be a string.";
  }
  return str.length % 2 === 0 ? "even" : "odd";
  }
  // const isEvenOdd = evenOdd('Phero');
  // console.log(isEvenOdd);
  // Problem 3 solution
  // This is a function which is taking a number input.you have to return your answer based on the input number is less or Greater than seven. validation is must.
  function isLGSeven(inputParam) {
  if (typeof inputParam !== "number") {
  return "Invalid input!";
  } else if (inputParam - 7 < 7) {
  return inputParam - 7;
  } else if (inputParam - 7 >= 7) {
  return inputParam * 2;
  }
  }
  // const result = isLGSeven(6);
  // console.log(result);
  //Problem 4 solution
  // This is a javascript function which in taking an array .need to find out How many bad data (negative number) is in the array. validation is must.
  function findingBadData(numbers) {
  let count = 0;
  if (!Array.isArray(numbers)) {
  return "Input is not an array.";
  }
  for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (typeof numbers[i] !== "number") {
  return "Array element is not a number.";
  }
  if (element < 0) {
  count = count + 1;
  }
  }
  return count;
  }
  // const result = findingBadData([-14,-4,-5,12,16,19,-2,-1]);
  // console.log(result);
  // Problem 5 solution
  // This is a JavaScript function that accepts 3 parameters.Then makes a program with
  // multiple mathematical operations. validation is a must.
  function gemsToDiamond(gems1, gems2, gems3) {
  if (
  typeof gems1 !== "number" ||
  typeof gems2 !== "number" ||
  typeof gems3 !== "number"
  ) {
  return "Please provide All valid number.";
  }
  let gemOne = gems1 * 21;
  let gemTwo = gems2 * 32;
  let gemThree = gems3 * 43;
  let totalDiamonds = gemOne + gemTwo + gemThree;
  if (totalDiamonds >= 1000 * 2) {
  return totalDiamonds - 2000;
  } else if (totalDiamonds < 1000 * 2) {
  return totalDiamonds;
  }
  }
  // const result = gemsToDiamond(100, 5, 1);
  // console.log(result);