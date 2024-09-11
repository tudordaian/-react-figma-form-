import {TradeButton, TradeInfo, TradeInput, TradeSwap, TradeTitle} from "./Components";
import {useFetchTokens, useHandleInputChange} from "./Hooks";
import {useState} from "react";
import {Token} from "./types";

export const TradeForm = () => {
    const {tokens} = useFetchTokens();
    const [selectedToken1, setSelectedToken1] = useState<Token>();
    const [selectedToken2, setSelectedToken2] = useState<Token>();

    const {
        inputAmount1,
        inputAmount2,
        handleInputChange,
        setInputAmount1,
        setInputAmount2
    } = useHandleInputChange(selectedToken1, selectedToken2);

    const handleSwap = () => {
        setSelectedToken1(selectedToken2);
        setSelectedToken2(selectedToken1);
        setInputAmount1(inputAmount2);
        setInputAmount2(inputAmount1);
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div id='form' className='w-534 h-724 bg-xExchange-Neutral/900 -mt-32'>
                <div id='frame' className="pt-14 pb-32 px-10 w-534 h-724">
                    <TradeTitle/>
                    <div id='content' className='flex-grow flex-shrink flex-basis-auto w-454  rounded-2xl flex flex-col items-center mt-4 p-1 gap-1 bg-xExchange-Neutral/850'>
                        <div id='swap-frame' className='flex flex-col justify-center items-center gap-1'>
                            <TradeInput
                                withMaxButton={true}
                                tokens={tokens}
                                selectedToken={selectedToken1}
                                setSelectedToken={setSelectedToken1}
                                amount={inputAmount1}
                                onInputChange={handleInputChange}
                            />
                            <TradeSwap swap={handleSwap}/>
                            <TradeInput
                                withMaxButton={false}
                                tokens={tokens}
                                selectedToken={selectedToken2}
                                setSelectedToken={setSelectedToken2}
                                amount={inputAmount2}
                                onInputChange={setInputAmount2}
                            />
                        </div>
                        {selectedToken1 && selectedToken2 && inputAmount1 !== '' && inputAmount2 !== '' && (
                            <TradeInfo
                                selectedToken1={selectedToken1}
                                selectedToken2={selectedToken2}
                                receivedAmount={inputAmount2}
                            />
                        )}
                        <TradeButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};