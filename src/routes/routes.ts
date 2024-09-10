import {TradeForm, Unlock} from '../pages';
import {RouteType} from '@multiversx/sdk-dapp/types';
import {RouteNamesEnum} from "../localConstants/routes";

interface RouteWithTitleType extends RouteType {
    title: string;
}

export const routes: RouteWithTitleType[] = [
    {
        path: RouteNamesEnum.unlock,
        title: 'Unlock',
        component: Unlock,
    },
    {
        path: RouteNamesEnum.tradeform,
        title: 'TradeForm',
        component: TradeForm,
    },
    {
        path: '/',
        title: 'Unlock',
        component: Unlock,
    },
];
