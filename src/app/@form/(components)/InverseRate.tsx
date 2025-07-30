"use client";

import useApi from "@hooks/useApi";
import { RatesResponse } from "@/types/ApiResponse";

import useExchangeStore from "@stores/useExchangeStore";
import { useMemo } from "react";
import { useFormatter } from "next-intl";
import { MAX_DECIMAL_DIGITS } from "@/constants/numbers";

const InverseRate = () => {
  const format = useFormatter();

  const { baseCurrency, targetCurrency } = useExchangeStore();

  const url = useMemo(() => {
    return `/rates?base=${targetCurrency.value}&symbols=${baseCurrency.value}`;
  }, [baseCurrency, targetCurrency]);

  const { loading, data } = useApi<RatesResponse>(url);

  if (loading) return <p>Loading...</p>;

  return (
    <h4 className="color-gray-500 text-base">
      1 {targetCurrency.value} ={" "}
      {format.number(Number(data?.rates[baseCurrency.value]), {
        maximumFractionDigits: MAX_DECIMAL_DIGITS,
      })}
      {baseCurrency.value}
    </h4>
  );
};

export default InverseRate;
