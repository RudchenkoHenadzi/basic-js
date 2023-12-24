const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      // Если переданный аргумент не является массивом, возвращаем 0
      return 0;
    }

    // Используем map для применения calculateDepth ко всем элементам массива
    const depths = arr.map((element) => this.calculateDepth(element));

    // Если массив пустой, возвращаем 1 (глубина плоского массива)
    if (depths.length === 0) {
      return 1;
    }

    // Возвращаем максимальную глубину, увеличенную на 1
    return Math.max(...depths) + 1;
  }
}

module.exports = {
  DepthCalculator
};
