"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import useApi from "@hooks/useApi";

import { getCurrencies } from "@utils/currency.utils";

import useExchangeStore from "@stores/useExchangeStore";

import Input from "@components/Inputs/Input";
import Select from "@components/Inputs/Select";
import Footer from "@components/Footer";

import Rate from "./(components)/Rate";
import Disclaimer from "./(components)/Disclaimer";

const Form = () => {
  const t = useTranslations("form");

  const {
    baseCurrency,
    targetCurrency,
    amount,
    setBaseCurrency,
    setTargetCurrency,
    setAmount,
  } = useExchangeStore();

  const { loading, data } =
    useApi<Record<string, { name: string; symbol: string }>>("/currencies");

  const currencies = getCurrencies(data);

  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="lg:px-20 px-8">
        <div className="rounded-lg shadow-md px-11 py-8 bg-white">
          <div className="flex flex-col xl:flex-row gap-14 items-center pb-17">
            <Input
              label={t("amount")}
              value={amount}
              onChange={(value) => setAmount(value)}
            />
            <Select
              label={t("from")}
              options={currencies}
              value={baseCurrency}
              onChange={(currency) => setBaseCurrency(currency)}
              isLoading={loading}
              isDisabled={loading}
            />
            <button
              className="flex items-center justify-center min-w-10 min-h-10 bg-inherit rounded-full"
              onClick={handleSwap}
            >
              <Image
                src="/swap.svg"
                alt="Currency conversion"
                width={42}
                height={42}
              />
            </button>
            <Select
              label={t("to")}
              options={currencies}
              value={targetCurrency}
              onChange={(currency) => setTargetCurrency(currency)}
              isLoading={loading}
              isDisabled={loading}
            />
          </div>
          <div className="flex flex-row justify-between">
            <Rate />
            <div className="hidden lg:flex flex-col gap-3 items-end mt-16 justify-end">
              <Disclaimer />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <Footer className="lg:hidden" />
    </div>
  );
};

export default Form;
