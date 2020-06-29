const closestToZero = require('./index');

describe('closestToZero function', () => {
  describe('given an array of positive and negative integers, it returns the closest number to zero', () => {
    it('should return 5 when input is [8, 5, 10]', () => {
      expect(closestToZero([8, 5, 10])).toEqual(5);
    });
    it('should return -1 when input is [5, 4, -9, 6, -10, -1, 8]', () => {
      expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toEqual(-1);
    });
    it('should return 0 when input is [2, 0]', () => {
      expect(closestToZero([2, 0])).toEqual(0);
    });
    it('should return 2 when input is [2]', () => {
      expect(closestToZero([2])).toEqual(2);
    });
    it('should return -2 when input is [-2]', () => {
      expect(closestToZero([-2])).toEqual(-2);
    });
  });
  describe('if the closest number in input could be either negative or positive, the function returns the positive one', () => {
    it('should return 2 when input is [8, 2, 3, -2]', () => {
      expect(closestToZero([8, 2, 3, -2])).toEqual(2);
    });
    it('should return 2 when input is [8, -2, 3, 2]', () => {
      expect(closestToZero([8, -2, 3, 2])).toEqual(2);
    });
  });
  describe('if the input array is undefined or empty, the function returns 0', () => {
    it('should return 0 when input is []', () => {
      expect(closestToZero([])).toEqual(0);
    });
    it('should return 0 when input is undefined', () => {
      expect(closestToZero()).toEqual(0);
    });
  });
});
