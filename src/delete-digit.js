const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const nSrt = n.toString()
  let nMax = 0

  for (let i = 0; i < nSrt.length; i++) {
    const currentNumber = parseInt(nSrt.slice(0, i) + nSrt.slice(i + 1))
    nMax = Math.max(nMax, currentNumber)
  }

  return nMax

}

module.exports = {
  deleteDigit
};
