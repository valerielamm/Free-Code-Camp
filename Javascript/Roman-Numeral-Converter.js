/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function convertToRoman(num) {
  let romanMap = [
    [ 1000, 'M' ],
    [ 900, 'CM' ],
    [ 500, 'D' ],
    [ 400, 'CD' ],
    [ 100, 'C' ],
    [ 90, 'XC' ],
    [ 50, 'L' ],
    [ 40, 'XL' ],
    [ 10, 'X' ],
    [ 9, 'IX' ],
    [ 5, 'V' ],
    [ 4, 'IV' ],
    [ 1, 'I' ]
  ];
  let romanFinal = "";
  
  for (let i = 0; i < romanMap.length; i++) {
     while(num-romanMap[i][0]>=0) {
        romanFinal+= romanMap[i][1];
        num -=romanMap[i][0];
    }
  }
  return romanFinal;
}
console.log(
convertToRoman(1220));