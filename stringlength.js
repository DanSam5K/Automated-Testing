
const stringLength = str => {
    let len = str.length;
    if(len > 0 && len < 10){
        return len
    } else {
        throw new Error("its out of range")
    }
};














module.exports = stringLength;