const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(typeof arr !== Array) {
    new Error ('Отдаваемый параметр не являеться массивом');
  }

  for(let i = 0; i < arr.length; i++) {
    if (arr[arr.length -1] === '--double-next') {
        arr.splice(arr.length -1, 1);
    } else if (arr[i] === '--double-next') {
        arr.splice(i, 1, arr[i +1]);
    } else if (arr[0] === '--double-prev') {
        arr.splice(arr[0], 1);
    } else if (arr[i] === '--double-prev') {
        arr.splice(i, 1, arr[i -1]);
    } else if (arr[arr.length -1] === '--discard-next') {
        arr.splice(arr.length -1, 1);
    } else if (arr[i] === '--discard-next') {
        arr.splice(i, 2);
    } else if (arr[0] === '--discard-prev') {
        arr.splice(arr[0], 1);
    } else if (arr[i] === '--discard-prev') {
        arr.splice(i -1, 2);
    }
}

  return arr;

};
