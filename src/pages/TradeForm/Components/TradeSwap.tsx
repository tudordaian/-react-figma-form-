import {HiArrowDown} from "react-icons/hi";
import {HiArrowsUpDown} from "react-icons/hi2";

type TradeSwapProps = {
    swap: () => void;
}

export const TradeSwap = ({swap}: TradeSwapProps) => {
    return (
        <div id="swap-button"
             className="absolute w-9 h-9 border-4 flex flex-col items-center justify-center border-xExchange-Swap rounded-full bg-neutral-800 cursor-pointer hover:bg-neutral-600 transition-all duration-300 group"
             onClick={swap}>
            <HiArrowDown className="text-xExchange-Neutral/400 p-1.5 h-8 w-8 group-hover:hidden"/>
            <HiArrowsUpDown className="text-xExchange-Neutral/400 p-1.5 h-10 w-10 hidden group-hover:block"/>
        </div>
    );
}