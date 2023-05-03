/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  let strNumber = x.toString();
  let reversedStrNumber = "";

  for (let i = strNumber.length - 1; i >= 0; i--) {
    reversedStrNumber += strNumber[i];
  }

  let reversedNumber = parseInt(reversedStrNumber);

  return x === reversedNumber;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
