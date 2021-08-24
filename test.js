//import { it, test } from '@jest/globals';
const { string } = require('yargs');
const stringLength  = require('./stringlength');
const stringReverse  = require('./stringreverse');
const Calculator = require('./calculator');


it ('Takes string and return it characters count', () => {
    let str = "Man of "; 

    const result = stringLength(str);

    expect(result).toBe(7)
    expect(result).not.toBe(0)
    expect(result).toBeLessThan(11);
})


it ('reverse string', () => {
    let str = "Man";

    const result = stringReverse(str);

    expect(result).toBe('nam')
    expect(result).not.toBe("man")
})
   
