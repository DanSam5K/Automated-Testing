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
   
describe('my Calculator', () => {
    let firstNum = 10, secondNum = 5
    const calculator = new Calculator();

    const addNum = calculator.add(firstNum, secondNum);
    const subtractNum = calculator.subtract(firstNum, secondNum)
    const divideNum = calculator.divide(firstNum, secondNum)
    const multiplyNum = calculator.multiply(firstNum, secondNum)

    test('Add numbers', () => {
      expect(addNum).toBe(15);
    });
  
    test('Subtract numbers', () => {
      expect(subtractNum).toBe(5);
    });

    test('Divide numbers', () => {
      expect(divideNum).toBe(2);
    });

    test('Subtract numbers', () => {
      expect(multiplyNum).toBe(50);
    });
});

it ('Capitalize string', () => {
    let str = "man";

    const result = capitalizeString(str);

    expect(result).toBe('Man')
    expect(result).not.toBe("man")
})
