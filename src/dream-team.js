const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(userName) {

    if(userName === null || userName === undefined) {

        return false;

    } else {

        // Создаем новый массив состоящий только из строк основного массива и удаляем пробелы

        let userNameStr =[];

        for(let i = 0; i < userName.length; i++) {
            if(typeof userName[i] === 'string') {
                userNameStr.push(userName[i].trim());
            }        
        }

        // Создаем новый массив состоящий из первых символов значений массива userNameStr

        let firstLetter = [];

        for(let i = 0; i < userNameStr.length; i++) {
            firstLetter.push(userNameStr[i][0]);
        }

        // Переводим массив в строку возводя вверхний регистр

        const collatore = new Intl.Collator('en-EN');

        let sortFirstLetter = firstLetter.sort(collatore.compare).join('').toUpperCase();

        return sortFirstLetter;
    }

};
