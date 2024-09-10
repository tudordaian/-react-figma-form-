import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import {useGetIsLoggedIn} from '@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn';


interface AuthRedirectWrapperPropsType extends PropsWithChildren {
    requireAuth?: boolean;
}

export const AuthRedirectWrapper = ({
                                        children,
                                        requireAuth = true
                                    }: AuthRedirectWrapperPropsType) => {
    const isLoggedIn = useGetIsLoggedIn();

    if (isLoggedIn && !requireAuth) {
        return <Navigate to='/tradeform' />;
    }

    if (!isLoggedIn && requireAuth) {
        return <Navigate to='/tradeform' />;
    }


    return <>{children}</>;
};
