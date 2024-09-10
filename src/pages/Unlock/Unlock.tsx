import {useNavigate} from "react-router-dom";
import {
    ExtensionLoginButton,
    ExtensionLoginButtonPropsType,
    WalletConnectLoginButtonPropsType,
    WebWalletLoginButtonPropsType
} from "@multiversx/sdk-dapp/UI";
import {AuthRedirectWrapper} from "../../wrappers/AuthRedirectWarapper";

type CommonPropsType =
    | ExtensionLoginButtonPropsType
    | WebWalletLoginButtonPropsType
    | WalletConnectLoginButtonPropsType;


export const Unlock = () => {
    const navigate = useNavigate();
    const commonProps: CommonPropsType = {
        callbackRoute: "/tradeform",
        nativeAuth: true,
        onLoginRedirect: () => {
            navigate("/tradeform");
        }
    };
    return (
        <AuthRedirectWrapper requireAuth={false}>
            <div className='flex justify-center items-center min-h-screen'>
                <div
                    className='flex flex-col -mt-96 p-6 items-center justify-center gap-4 rounded-xl bg-xExchange-Neutral/750 shadow-xl'
                    data-testid='unlockPage'
                >
                    <div className='flex flex-col items-center gap-1'>
                        <h2 className='text-2xl text-xExchange-Neutral/300'>Login</h2>
                    </div>

                    <div className='flex flex-col md:flex-row'>
                        <ExtensionLoginButton
                            loginButtonText='DeFi Wallet'
                            {...commonProps}
                        />
                    </div>
                </div>
            </div>
        </AuthRedirectWrapper>
    );
}