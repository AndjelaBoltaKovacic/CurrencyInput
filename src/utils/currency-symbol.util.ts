import { CurrencyCode } from "../types/currencies";

export const getCurrencySymbol = (currencyCode: CurrencyCode): string => {
    try {
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode });
        const parts = formatter.formatToParts(0);
        const symbolPart = parts.find((part) => part.type === 'currency');

        if (symbolPart) {
            return symbolPart.value;
        }
    } catch (error) {
        console.error('Currency code not valid')
    }

    return '';
}

