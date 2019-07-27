import isPopulatedArray from '../../app/util/isPopulatedArray';

describe('isPopulatedArray', () => {
    it('should return truthy when an array of numbers are passed in', () => {
        const source = [1, 2, 3, 4, 5];
        expect(isPopulatedArray(source)).toBeTruthy();
    });
    it('should return truthy when an array of strings are passed in', () => {
        const source = ['apple', 'banana', 'pear'];
        expect(isPopulatedArray(source)).toBeTruthy();
    });
    it('should return truthy when an array of objects are passed in', () => {
        const source = [{fruit: 'apple'}, {fruit: 'banana'}, {fruit: 'pear'}];
        expect(isPopulatedArray(source)).toBeTruthy();
    });
    it('should return falsy when an empty array is passed in', () => {
        const source = [];
        expect(isPopulatedArray(source)).toBeFalsy();
    });
    it('should return falsy when undefined is passed in', () => {
        const source = undefined;
        expect(isPopulatedArray(source)).toBeFalsy();
    });
    it('should return falsy when a number is passed in', () => {
        const source = 1;
        expect(isPopulatedArray(source)).toBeFalsy();
    });
    it('should return falsy when a string is passed in', () => {
        const source = 'hello world';
        expect(isPopulatedArray(source)).toBeFalsy();
    });
    it('should return falsy when null is passed in', () => {
        const source = null;
        expect(isPopulatedArray(source)).toBeFalsy();
    });
});