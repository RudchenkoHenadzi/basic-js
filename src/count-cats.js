const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {

  let concatArr = [];

  for(let i = 0; i < cat.length; i++) {
      concatArr = concatArr.concat(cat[i]);
  }

  // Закончили объеденять все массивы в один

  // Фильтруем массив

  let filterArr = concatArr.filter(EarsСat);

  function EarsСat(ear) {
      return ear === '^^';
  }

  return filterArr.length;

};
