//import { it, test } from '@jest/globals';
const { string } = require('yargs');
const stringLength  = require('./stringlength.js');


it ('Takes string and return it characters count', () => {
    let str = "Man";
    const result = stringLength(str);
    expect(result).toBe(3)
    expect(result).not.toBe(0)
    expect(result).toBeLessThan(11);
})
   