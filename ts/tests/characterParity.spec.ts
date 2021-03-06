import {characterParity} from '../src/characterParity';

describe(characterParity.name, () => {
    it('Test 1', () => {
        const data = '5';
        const response = characterParity(data);
        expect(response).toBe('odd');
    });

    it('Test 2', () => {
        const data = '8';
        const response = characterParity(data);
        expect(response).toBe('even');
    });

    it('Test 3', () => {
        const data = 'q';
        const response = characterParity(data);
        expect(response).toBe('not a digit');
    });

    it('Test 4', () => {
        const data = '1';
        const response = characterParity(data);
        expect(response).toBe('odd');
    });

    it('Test 5', () => {
        const data = '2';
        const response = characterParity(data);
        expect(response).toBe('even');
    });

    it('Test 6', () => {
        const data = '9';
        const response = characterParity(data);
        expect(response).toBe('odd');
    });
});
