const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let incTurns = Math.pow(2, disksNumber) - 1; // Минимальное количество перемещений дисков для решения головоломки
  let finalTime = Math.floor((3600 * incTurns) / turnsSpeed); // Минимальное время необходимое для перемещения incTurns дисков

  let result = {
      turns: incTurns,
      seconds: finalTime,
  };

  return(result);
};
