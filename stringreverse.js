
const stringReverse = str => {
     let splitStr = str.split('').reverse().join('').toLowerCase();
     return splitStr;
}


module.exports = stringReverse;