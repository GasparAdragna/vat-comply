"use client";

import useApi from "@hooks/useApi";
import { RatesResponse } from "@/types/ApiResponse";

import useExchangeStore from "@stores/useExchangeStore";
import { useMemo } from "react";
import InverseRate from "./InverseRate";
import { useFormatter } from "next-intl";
import { MAX_DECIMAL_DIGITS } from "@/constants/numbers";

const Rate = () => {
  const format = useFormatter();

  const { amount, baseCurrency, targetCurrency, setDate } = useExchangeStore();

  const url = useMemo(() => {
    return `/rates?base=${baseCurrency.value}&symbols=${targetCurrency.value}`;
  }, [baseCurrency, targetCurrency]);

  const { loading, data } = useApi<RatesResponse>(url, false, setDate);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-3 ">
      <div>
        <h3 className="text-3xl font-semibold leading-9">
          {format.number(Number(amount ?? 1))} {baseCurrency.label} ={" "}
        </h3>
        <h3 className="text-3xl font-semibold leading-9">
          {format.number(
            Number(data?.rates[targetCurrency.value]) * Number(amount ?? 1),
            {
              maximumFractionDigits: MAX_DECIMAL_DIGITS,
            }
          )}{" "}
          {targetCurrency.label}
        </h3>
      </div>
      <InverseRate />
    </div>
  );
};

export default Rate;
