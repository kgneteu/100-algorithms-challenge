import { newNumeralSystem } from '../src/newNumeralSystem';

describe(newNumeralSystem.name, () => {
    it('Test 1', () => {
       
        const number = 'G';

   
        const response = newNumeralSystem(number);

 
        expect(response).toEqual(["A + G", "B + F", "C + E", "D + D"]);
    });
});