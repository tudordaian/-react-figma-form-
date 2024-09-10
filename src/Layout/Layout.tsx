import type {PropsWithChildren} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthenticatedRoutesWrapper} from '@multiversx/sdk-dapp/wrappers';
import {routes} from '../routes';
import {Nav} from "../components/Nav.tsx";
import {RouteNamesEnum} from "../localConstants/routes";

export const Layout = ({children}: PropsWithChildren) => {
    const {search} = useLocation();
    return (
        <>
            <Nav/>
            <AuthenticatedRoutesWrapper
                routes={routes}
                unlockRoute={`${RouteNamesEnum.unlock}${search}`}
            >
                {children}
            </AuthenticatedRoutesWrapper>
        </>
    );
};
