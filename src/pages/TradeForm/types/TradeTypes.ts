export type Token = {
    ticker: string;
    svgUrl: string;
    balance: string;
    price: number;
};

export type TradeInputProps = {
    withMaxButton: boolean,
    tokens: Token[],
    selectedToken: Token,
    setSelectedToken: (token: Token) => void,
    amount: string,
    onInputChange: (value: string) => void,
};

export type TradeSwapProps = {
    swap: () => void;
}

export type TradeInfoProps = {
    selectedToken1: Token;
    selectedToken2: Token;
    receivedAmount: string;
};