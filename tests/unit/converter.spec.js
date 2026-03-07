import { binaryToDecimal, decimalToBinary, isValidBinary, isValidDecimal } from '@/utils/converter';

describe('Converter Utils', () => {
	describe('isValidBinary', () => {
		it('should return true for valid binary strings', () => {
			expect(isValidBinary('0')).toBe(true);
			expect(isValidBinary('1')).toBe(true);
			expect(isValidBinary('1010')).toBe(true);
		});

		it('should return false for invalid binary strings', () => {
			expect(isValidBinary('2')).toBe(false);
			expect(isValidBinary('10a')).toBe(false);
			expect(isValidBinary('')).toBe(false);
		});
	});

	describe('isValidDecimal', () => {
		it('should return true for valid decimal strings', () => {
			expect(isValidDecimal('0')).toBe(true);
			expect(isValidDecimal('123')).toBe(true);
		});

		it('should return false for invalid decimal strings', () => {
			expect(isValidDecimal('12a')).toBe(false);
			expect(isValidDecimal('')).toBe(false);
		});
	});

	describe('binaryToDecimal', () => {
		it('should convert binary to decimal correctly', () => {
			expect(binaryToDecimal('101')).toBe('5');
			expect(binaryToDecimal('1111')).toBe('15');
		});

		it('should throw error for invalid input', () => {
			expect(() => binaryToDecimal('2')).toThrow('Invalid binary number');
		});
	});

	describe('decimalToBinary', () => {
		it('should convert decimal to binary correctly', () => {
			expect(decimalToBinary('5')).toBe('101');
			expect(decimalToBinary('15')).toBe('1111');
		});

		it('should throw error for invalid input', () => {
			expect(() => decimalToBinary('a')).toThrow('Invalid decimal number');
		});
	});
});
