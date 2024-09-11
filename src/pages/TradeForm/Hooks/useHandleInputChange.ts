import { useState, useEffect } from 'react';
import { Token } from '../types';

export const useHandleInputChange = (selectedToken1?: Token, selectedToken2?: Token) => {
    const [inputAmount1, setInputAmount1] = useState('');
    const [inputAmount2, setInputAmount2] = useState('');

    const handleInputChange = (value: string) => {
        setInputAmount1(value);
        if (!isNaN(parseFloat(value)) && selectedToken1 && selectedToken2) {
            const calculatedValue = (parseFloat(value) * (selectedToken1.price / selectedToken2.price)).toFixed(4).toString();
            setInputAmount2(calculatedValue);
        } else {
            setInputAmount2('');
        }
    };

    useEffect(() => {
        if (inputAmount1 && !isNaN(parseFloat(inputAmount1)) && selectedToken1 && selectedToken2) {
            const calculatedValue = (parseFloat(inputAmount1) * (selectedToken1.price / selectedToken2.price)).toFixed(4).toString();
            setInputAmount2(calculatedValue);
        }
    }, [selectedToken1, selectedToken2]);

    return { inputAmount1, inputAmount2, handleInputChange, setInputAmount1, setInputAmount2 };
};