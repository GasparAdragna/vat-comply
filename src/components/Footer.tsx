import { useTranslations } from "next-intl";

import useExchangeStore from "@stores/useExchangeStore";

const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations("footer");

  const { baseCurrency, targetCurrency, date } = useExchangeStore();

  return (
    <p className={`text-xs font-light leading-9 ${className}`}>
      {t("text", {
        baseCurrency: baseCurrency.label,
        targetCurrency: targetCurrency.label,
        lastUpdated: date ?? "-",
      })}
    </p>
  );
};

export default Footer;
