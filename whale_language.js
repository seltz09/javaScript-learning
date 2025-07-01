/*
  Whale Talk Translator 🐋
  -------------------------
  This script converts a given phrase into "whale talk" by:
  - Keeping only vowels (a, e, i, o, u), excluding "y"
  - Doubling the letters 'e' and 'u' for extra-long whale sounds
  - Outputting the result as a slowly sung string of vowels

  Example:
  Input:  "turpentine and turtles"
  Output: "UUEEIEEAUUEE"
*/


let input = 'this is a test message'

const vowels = ["a", "e", "i", "o", "u"]

let resultArray = []

for (var i = 0; i < input.length; i++) {
  // console.log(i);
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
}

const upperString = resultArray.join("").toUpperCase();

console.log(upperString)