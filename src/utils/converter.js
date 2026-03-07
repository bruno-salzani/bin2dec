export const isValidBinary = (binary) => {
	return /^[01]+$/.test(binary);
};

export const isValidDecimal = (decimal) => {
	return /^\d+$/.test(decimal);
};

export const binaryToDecimal = (binary) => {
	if (!isValidBinary(binary)) {
		throw new Error('Invalid binary number');
	}
	return parseInt(binary, 2).toString();
};

export const decimalToBinary = (decimal) => {
	if (!isValidDecimal(decimal)) {
		throw new Error('Invalid decimal number');
	}
	const num = parseInt(decimal, 10);
	return num.toString(2);
};
