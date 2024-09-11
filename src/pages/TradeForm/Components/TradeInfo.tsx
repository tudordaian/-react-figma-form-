import {IoIosArrowDown} from "react-icons/io";
import {TbInfoSquareFilled} from "react-icons/tb";
import {MdSettings} from "react-icons/md";
import {Token} from "../types";

type TradeInfoProps = {
    selectedToken1: Token;
    selectedToken2: Token;
    receivedAmount: string;
};

export const TradeInfo = ({selectedToken1, selectedToken2, receivedAmount}: TradeInfoProps) => {
    return (
        <div id='info-frame' className='w-446 h-176 py-4 px-6 gap-4 flex flex-col rounded-xl bg-xExchange-Neutral/850 border border-xExchange-Neutral/750'>
            <div id="top" className="flex w-398 h-6 justify-between">
                <div className="flex items-center gap-1">
                    <div className="w-129 h-4 text-xExchange-Neutral/400 opacity-80 font-normal text-14-16">Minimum received:</div>
                    <div className="-mx-2 gap-1 w-255 h-4 flex items-center text-14-16">
                        <div className="text-xExchange-Neutral/200 ">{receivedAmount || '0'} </div>
                        <div className="text-xExchange-Neutral/400">{selectedToken2.ticker}</div>
                    </div>
                    <IoIosArrowDown className='w-4 h-4 mr-1 text-xExchange-Neutral/500 '/>
                </div>
            </div>

            <div id="bottom" className="pt-4 gap-2 flex flex-col border-t border-xExchange-Neutral/750 ">
                <div id='row1' className="flex justify-between h-4 w-398 items-center">
                    <div className="w-52 h-4 gap-1 flex items-center justify-start text-14-16 font-normal text-xExchange-Neutral/400">
                        <div className="w-94 h-4 ">Exchange Rate</div>
                        <TbInfoSquareFilled className='text-xExchange-Neutral/500'/>
                    </div>
                    <div className="w-40 h-4 flex items-center justify-end font-normal text-14-16 text-xExchange-Neutral/200">
                        1 {selectedToken1.ticker} = {(selectedToken1.price / selectedToken2.price).toFixed(4).toString()} {selectedToken2.ticker}
                    </div>
                </div>

                <div id='row2' className="w-398 h-4 flex justify-between items-center">
                    <div className="w-52 h-4 flex items-center justify-start text-14-16 font-normal text-xExchange-Neutral/400">
                        <div className="w-127 h-4 ">Slippage Tolerance</div>
                        <TbInfoSquareFilled className='-mx-1 text-xExchange-Neutral/500'/>
                    </div>
                    <div className="w-10 h-4 flex items-center gap-2 font-normal text-14-16 text-xExchange-Neutral/200">
                        <div className="w-15 h-4 px-1">1%</div>
                        <MdSettings className=' ml-1'/>
                    </div>
                </div>

                <div id='row3' className="w-398 h-4 flex justify-between items-center">
                    <div className="w-52 h-4 flex font-normal text-14-16 text-xExchange-Neutral/400">
                        <div className="w-16 h-4">Trade Fee</div>
                        <TbInfoSquareFilled className='mx-0.5 text-xExchange-Neutral/500'/>
                    </div>
                    <div className="w-70 h-4 flex gap-x-1 items-center">
                        <div className="w-9 h-4 font-normal text-14-16 text-xExchange-Neutral/500">$0.05</div>
                        <div className="w-30 h-4 font-normal text-14-16 text-xExchange-Neutral/200">0.3%</div>
                    </div>
                </div>

                <div id='row4' className="flex justify-between h-4 w-398 items-center">
                    <div className="w-52 h-4 flex font-normal text-14-16 text-xExchange-Neutral/400">
                        <div className="w-80 h-4">Price Impact</div>
                        <TbInfoSquareFilled className='mx-0.5 text-xExchange-Neutral/500'/>
                    </div>
                    <div className="w-34 h-4">
                        <div className="w-34 h-4 -ml-1 font-normal text-14-16 text-xExchange-Neutral/200">&lt;0.1%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}