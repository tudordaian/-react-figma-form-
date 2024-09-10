import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from 'formik';
import {IoIosArrowDown} from 'react-icons/io';
import {FaWallet} from 'react-icons/fa';
import * as Yup from 'yup';
import {formatAmount} from "@multiversx/sdk-dapp/utils";
import {TradeInputProps} from "../types";

const validationSchema = Yup.object({
    inputAmount: Yup.number()
        .required('Amount required')
        .min(0.0005, 'Minimum amount: 0.0005'),
});

export const TradeInput = ({withMaxButton, tokens, selectedToken, setSelectedToken, amount, onInputChange}: TradeInputProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (tokens.length > 0) {
            setSelectedToken(tokens[0]);
            setLoading(false);
        }
    }, [tokens]);

    const handleTokenClick = (tokenIndex: number) => {
        setSelectedToken(tokens[tokenIndex]);
        setDropdownVisible(false);
    };

    const handleMaxButton = (setFieldValue: (field: string, value: string) => void) => {
        if (selectedToken) {
            const formattedBalance = Number(formatAmount({input: selectedToken.balance})).toFixed(2);
            setFieldValue('inputAmount', formattedBalance);
            onInputChange(formattedBalance);
        }
    };


    return (
        <Formik
            initialValues={{inputAmount: amount}}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={() => {
            }}
        >
            {({values, setFieldValue, errors, touched}) => (
                <Form>
                    <div id='input' className='w-446 h-124 p-6 rounded-xl bg-xExchange-Neutral/750'>
                        <div id='input-content' className='w-398 h-76 gap-3'>
                            <div id='input-top' className='w-398 h-40 flex items-center justify-between'>
                                <Field
                                    id='input-amount'
                                    name='inputAmount'
                                    className='h-8 w-220 outline-none font-normal text-32-32 text-xExchange-Neutral/300 bg-xExchange-Neutral/750'
                                    placeholder='0'
                                    value={values.inputAmount}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setFieldValue('inputAmount', e.target.value);
                                        onInputChange(e.target.value);
                                    }}
                                />

                                <div id='input-tokens'
                                     className='relative w-129 h-40 p-1 gap-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-lg rounded-br-lg bg-xExchange-Neutral/850 hover:bg-xExchange-Neutral/700 transition-all duration-300 cursor-pointer'>
                                    <div className="flex gap-2" onClick={() => setDropdownVisible(!dropdownVisible)}>
                                        {!loading && selectedToken && (
                                            <>
                                                <img src={selectedToken?.svgUrl} alt={selectedToken?.ticker} className="h-8 w-8 rounded-full"/>
                                                <div id='token-id' className='text-21-24 h-8 w-78 flex items-center font-normal text-xExchange-Neutral/300'>{selectedToken?.ticker}</div>
                                                <IoIosArrowDown className='w-8 h-8 mr-1 text-xExchange-Neutral/500 '/>
                                            </>
                                        )}
                                    </div>
                                    {dropdownVisible && (
                                        <div className='absolute top-full -mt-10 left-0 w-full bg-xExchange-Neutral/850 rounded-tl-3xl rounded-bl-3xl rounded-lg shadow-lg z-10'>
                                            {tokens.map((token, index) => (
                                                <div key={token.ticker} className='flex items-center gap-2 p-2 hover:bg-xExchange-Neutral/700 hover:rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-lg cursor-pointer'
                                                     onClick={() => handleTokenClick(index)}>
                                                    <img src={token.svgUrl} alt={token.ticker} className="h-8 w-8 rounded-full"/>
                                                    <div className='text-21-24 h-8 w-78 flex items-center font-normal text-xExchange-Neutral/300'>{token.ticker}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {errors.inputAmount && touched.inputAmount ? (
                                <div className='absolute text-red-500 text-12-14'>{errors.inputAmount}</div>
                            ) : null}

                            <div id='input-bottom' className='w-398 h-6 flex items-center justify-between mt-3'>
                                {values.inputAmount && selectedToken ? (<div id='input-value' className='w-54 h-5 font-normal text-14-19.6 text-xExchange-Neutral/500'>${(Number(values.inputAmount) * selectedToken.price).toFixed(2)}</div>)
                                    :
                                    (<div id='input-value' className='w-54 h-5 font-normal text-14-19.6 text-xExchange-Neutral/500'>$0.00</div>)
                                }

                                <div id='right-side' className='w-398 h-6 gap-3 flex items-center justify-end'>
                                    <div id='total' className='flex items-center justify-end gap-1'>
                                        <div id='icon-frame' className='gap-0.5 w-4 h-4 flex items-center'>
                                            <FaWallet className='w-14 h-13.5 text-xExchange-Neutral/300'/>
                                        </div>
                                        {selectedToken && (
                                            <div id='sum' className='flex-grow text-16-24 font-normal text-xExchange-Neutral/300'>{Number(formatAmount({input: selectedToken.balance})).toFixed(2)}</div>
                                        )}
                                        {withMaxButton && (
                                            <div id='max-frame' onClick={() => handleMaxButton(setFieldValue)}
                                                 className='w-46 h-6 py-1 px-2 gap-2 flex items-center justify-center rounded-lg bg-xExchange-Max-bg hover:rounded hover:bg-xExchange-Confirm transition-all duration-300 '>
                                                <button type='button' className="text-14-16 p-1 flex font-normal text-xExchange-Max hover:text-white transition-all duration-300 cursor-pointer">MAX</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};