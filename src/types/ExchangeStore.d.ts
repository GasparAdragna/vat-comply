type ExchangeStore = {
  baseCurrency: Currency;
  targetCurrency: Currency;
  amount: number | undefined | string;
  date: string | undefined;
  setBaseCurrency: (currency: Currency) => void;
  setTargetCurrency: (currency: Currency) => void;
  setAmount: (amount: number | undefined | string) => void;
  setDate: (date: string | undefined) => void;
};
