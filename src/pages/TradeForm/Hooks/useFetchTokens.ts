import { useState, useEffect } from 'react';
import axios from 'axios';
import {useGetAccount} from "@multiversx/sdk-dapp/hooks";
import {UseFetchTokensReturnType} from "../types";

export const useFetchTokens = () => {
    const { address } = useGetAccount();
    const [tokens, setTokens] = useState<UseFetchTokensReturnType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://devnet-api.multiversx.com/accounts/${address}/tokens`);
                const tokens = data.map((tokens: {ticker: string, assets: {svgUrl: string}, price: number, balance: string}) => ({
                    ticker: tokens.ticker,
                    svgUrl: tokens.assets.svgUrl,
                    price: tokens.price,
                    balance: tokens.balance,

                }));
                if (tokens.length > 0) {
                    setTokens(tokens);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [address]);

    return { tokens };
};
