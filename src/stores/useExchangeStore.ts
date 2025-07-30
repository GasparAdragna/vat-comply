import { create } from "zustand";

const useExchangeStore = create<ExchangeStore>()((set) => ({
  baseCurrency: { value: "USD", label: "United States Dollar" },
  targetCurrency: { value: "EUR", label: "Euro" },
  amount: 1,
  date: undefined,
  setBaseCurrency: (currency: Currency) =>
    set((state) => ({ ...state, baseCurrency: currency })),
  setTargetCurrency: (currency: Currency) =>
    set((state) => ({ ...state, targetCurrency: currency })),
  setAmount: (amount: number | undefined | string) =>
    set((state) => ({ ...state, amount })),
  setDate: (date: string | undefined) => set((state) => ({ ...state, date })),
}));

export default useExchangeStore;
