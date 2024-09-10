import {MdSettings} from "react-icons/md";

export const TradeTitle = () => {
    return (
        <div id='title/settings' className='w-454 h-8 flex items-center justify-between'>
            <div id='title' className=' text-3xl h-8 w-78 font-normal text-xExchange-Neutral/200'>Trade</div>
            <div id='button' className='w-8 h-8 bg-xExchange-Neutral/850 rounded-lg flex items-center justify-center'>
                <MdSettings className='size-5 text-xExchange-Neutral/100 '/>
            </div>
        </div>
    );
}