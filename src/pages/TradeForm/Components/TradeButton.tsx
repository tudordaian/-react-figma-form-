import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn";
import {AuthRedirectWrapper} from "../../../wrappers/AuthRedirectWarapper";
import {useExtensionLogin} from "@multiversx/sdk-dapp/hooks";
import {useNavigate} from "react-router-dom";

export const TradeButton = () => {
    const isLoggedIn = useGetIsLoggedIn();
    const navigate = useNavigate();

    const [login] = useExtensionLogin({
        callbackRoute: "/tradeform",
        nativeAuth: true,
        onLoginRedirect: () => {
            navigate("/tradeform");
        }
    });
    return (
        isLoggedIn ? (
            <AuthRedirectWrapper requireAuth={true}>
                <button className="h-12 w-446 rounded-xl text-white bg-xExchange-Confirm">Confirm</button>
            </AuthRedirectWrapper>
        ) : (
            <button onClick={login} className="h-12 w-446 rounded-xl text-white bg-xExchange-Confirm">Connect Wallet</button>
        )
    )
}