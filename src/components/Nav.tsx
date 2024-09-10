import {EnvironmentsEnum} from "@multiversx/sdk-dapp/types";
import {logout} from '@multiversx/sdk-dapp/utils';
import {useGetIsLoggedIn} from '@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn';
import {RouteNamesEnum} from "../localConstants/routes";

const callbackUrl = `${window.location.origin}${RouteNamesEnum.tradeform}`;
const onRedirect = undefined;       // use this to redirect with useNavigate to a specific page after logout
const shouldAttemptReLogin = false; // use for special cases where you want to re-login after logout
const options = {
    /*
     * @param {boolean} [shouldBroadcastLogoutAcrossTabs=true]
     * @description If your dApp supports multiple accounts on multiple tabs,
     * this param will broadcast the logout event across all tabs.
     */
    shouldBroadcastLogoutAcrossTabs: true,
    /*
     * @param {boolean} [hasConsentPopup=false]
     * @description Set it to true if you want to perform async calls before logging out on Safari.
     * It will open a consent popup for the user to confirm the action before leaving the page.
     */
    hasConsentPopup: false
};

export const Nav = () => {
    const isLoggedIn = useGetIsLoggedIn();

    const handleLogout = () => {
        sessionStorage.clear();
        logout(
            callbackUrl,
            /*
             * following are optional params. Feel free to remove them in your implementation
             */
            onRedirect,
            shouldAttemptReLogin,
            options
        );
    };

    return (
        <header className='flex flex-row align-center justify-between pl-2 pt-2 pb-2 sticky top-0 mb-2 bg-xExchange-Neutral/750 shadow-xl'>
            <nav className='h-12 w-full text-base sm:relative sm:left-auto sm:top-auto sm:flex sm:w-auto sm:flex-row sm:justify-end sm:bg-transparent'>
                <div className='gap-1.25 flex justify-end container mx-auto items-center gap-2.5'>
                    <div className='flex  items-center'>
                        <div className='w-2.5 h-2.5 mx-2 rounded-full bg-green-500'/>
                        <p className='text-xExchange-Neutral/300 text-xl hover:text-white transition-all'>{EnvironmentsEnum.devnet}</p>
                    </div>

                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className='inline-block p-2 text-xl text-xExchange-Neutral/300 bg-xExchange-Neutral/500 rounded-3xl hover:rounded-xl hover:text-white hover:bg-xExchange-Neutral/500 transition-all duration-300 cursor-pointer'
                        >
                            Logout
                        </button>
                    )}

                </div>

            </nav>
            <div className='absolute left-1/2 transform -translate-x-1/2 text-4xl text-xExchange-Neutral/200 font-normal'>
                Dapp
            </div>
        </header>
    );
};