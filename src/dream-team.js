const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let team = ''

  if(Array.isArray(members)) {

    members.forEach(el => {
      if(typeof el === 'string') {
        team += el.toUpperCase().split('').join('').trim()[0]
      } else  {
        return false
      }
    })

    return team.split('').sort().join('')

  }

  return false

}

module.exports = {
  createDreamTeam
};
