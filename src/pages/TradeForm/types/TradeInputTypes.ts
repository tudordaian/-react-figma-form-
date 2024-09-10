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