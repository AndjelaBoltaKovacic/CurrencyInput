import {
    formatNumberInputWithDecimals,
    getFloat,
    formatValue,
    formatDefaultValue,
} from '../src/utils/utils';

describe('formatNumberInputWithDecimals', () => {
    it('formats a string with digits correctly', () => {
        const formattedValue = formatNumberInputWithDecimals('1234');
        expect(formattedValue).toBe('12.34');
    });

    it('handles empty input', () => {
        const formattedValue = formatNumberInputWithDecimals('');
        expect(formattedValue).toBe('0.00');
    });

    it('handles input with only one digit', () => {
        const formattedValue = formatNumberInputWithDecimals('5');
        expect(formattedValue).toBe('0.05');
    });

    it('handles input with two digits', () => {
        const formattedValue = formatNumberInputWithDecimals('12');
        expect(formattedValue).toBe('0.12');
    });

    it('handles input with three digits', () => {
        const formattedValue = formatNumberInputWithDecimals('123');
        expect(formattedValue).toBe('1.23');
    });
    it('handles input with 6+ digits', () => {
        const formattedValue = formatNumberInputWithDecimals('123456');
        expect(formattedValue).toBe('1,234.56');
    });

});

describe('getFloat', () => {
    it('parses a string with commas as a float', () => {
        const floatValue = getFloat('1,234.56');
        expect(floatValue).toBe(1234.56);
    });

    it('parses a string without commas as a float', () => {
        const floatValue = getFloat('1234.56');
        expect(floatValue).toBe(1234.56);
    });

    it('handles an empty string', () => {
        const floatValue = getFloat('');
        expect(floatValue).toBeNaN();
    });

});

describe('formatValue', () => {
    it('formats a string value as is when type is "text"', () => {
        const formattedValue = formatValue('123.45', 'text');
        expect(formattedValue).toBe('123.45');
    });

    it('parses and formats a string value as a float when type is "number"', () => {
        const formattedValue = formatValue('1,234.56', 'number');
        expect(formattedValue).toBe(1234.56);
    });
});

describe('formatDefaultValue', () => {
    it('formats a number as a string with decimals', () => {
        const formattedValue = formatDefaultValue(1234.56);
        expect(formattedValue).toBe('1,234.56');
    });

    it('formats an empty string as an empty string', () => {
        const formattedValue = formatDefaultValue('');
        expect(formattedValue).toBe('');
    });

    it('formats a string with decimals as is', () => {
        const formattedValue = formatDefaultValue('1234.56');
        expect(formattedValue).toBe('1,234.56');
    });
});
