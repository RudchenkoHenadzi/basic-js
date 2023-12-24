const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  const string = String(str)
  const separator = options.separator ? options.separator : '+'
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  const addition =  options.addition !== undefined ? String(options.addition) : ''
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1

  let resultString = (string + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length) + separator).repeat(repeatTimes).slice(0, -separator.length);

  // for (let i = 0; i < options.repeatTimes; i++) {
  //     resultString += `${string}${(addition + additionSeparator).repeat(additionRepeatTimes)}${separator}`
  // }

  console.log(resultString)
  return resultString

}

module.exports = {
  repeater
};
