"use client";

import { useTranslations } from "next-intl";

import { BODY_BACKGROUND } from "@constants/theme";
import useExchangeStore from "@/stores/useExchangeStore";

const Home = () => {
  const t = useTranslations("home");

  const { baseCurrency, targetCurrency, amount } = useExchangeStore();

  return (
    <div className={`w-full bg-[${BODY_BACKGROUND}]`}>
      <div className="flex flex-row pt-16 pb-18 justify-center items-center px-12">
        <h2 className="font-semibold text-[32px] text-white">
          {t("subtitle", {
            baseCurrencySymbol: baseCurrency.value,
            targetCurrencySymbol: targetCurrency.value,
            value: amount?.toLocaleString() ?? "-",
            baseCurrency: baseCurrency.label,
            targetCurrency: targetCurrency.label,
          })}
        </h2>
      </div>
    </div>
  );
};

export default Home;
