const capitalizeString = str => {
   let splitStr = str.split('');
   const newStr = splitStr[0].toUpperCase();
   splitStr.shift()
   splitStr.unshift(newStr);
   const finalStr = splitStr.join('')
   return finalStr;
}


module.exports = capitalizeString;