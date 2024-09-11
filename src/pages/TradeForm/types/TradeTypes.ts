export type Token = {
    ticker: string;
    svgUrl: string;
    balance: string;
    price: number;
};

export type TradeInputProps = {
    withMaxButton: boolean,
    tokens: Token[],
    selectedToken: Token | undefined,
    setSelectedToken: (token: Token) => void,
    amount: string,
    onInputChange: (value: string) => void,
};

export type UseFetchTokensReturnType = {
    ticker: string,
    svgUrl: string,
    price: number,
    balance: string,
}

export type TradeSwapProps = {
    swap: () => void;
}

export type TradeInfoProps = {
    selectedToken1: Token;
    selectedToken2: Token;
    receivedAmount: string;
};