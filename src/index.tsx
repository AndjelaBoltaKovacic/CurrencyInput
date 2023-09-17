import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { formatDefaultValue, formatNumberInputWithDecimals, formatValue } from './utils/utils';
import { CurrencyCode } from './types/currencies';
import { getCurrencySymbol } from './utils/currency-symbol.util';
import './currency-input.css';


export interface CurrencyInputProps {
    onChange: Dispatch<SetStateAction<any>> | ((value: string | number) => void);
    defaultValue?: string | number;
    type: 'text' | 'number';
    currencyCode?: CurrencyCode;
    customStyles?: {
        width?: string;
        height?: string;
        padding?: string;
        fontSize?: string;
        color?: string;
        border?: string;
        fontWeight?: string;
        borderRadius?: string;
    }
}

const defaultStyles = {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    height: '40px',
    padding: '7px 10px',
    fontSize: '2rem',
    color: '#000000',
    border: '2px solid #C0C0C0',
    borderRadius: '5px',
    fontWeight: '500',
};

function CurrencyInput({
    onChange: setValue,
    defaultValue,
    type,
    currencyCode,
    customStyles = defaultStyles,
}: CurrencyInputProps) {
    const [editedValue, setEditedValue] = useState('0.00');

    useEffect(() => {
        defaultValue && setEditedValue(formatDefaultValue(defaultValue));
    }, [defaultValue]);

    useEffect(() => {
        setValue(formatValue(editedValue, type));
    }, [editedValue, setValue, type]);

    const onChange = (value: string) => {
        setEditedValue(formatNumberInputWithDecimals(value));
    };

    return (
        <span className='inputContainer' style={{ ...defaultStyles, ...customStyles }}>
            {currencyCode && <span><b>{getCurrencySymbol(currencyCode)}</b>&nbsp;</span>}
            <input
                maxLength={12}
                id="currency-input"
                value={editedValue}
                type="text"
                name="currency-input"
                onChange={(e) => onChange(e.target.value)}
            />
        </span>
    );
}

export default CurrencyInput;
