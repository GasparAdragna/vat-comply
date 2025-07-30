"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/services";
import { useLocale } from "next-intl";
import { startTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();

  const handleClick = (newLocale: Locale) => {
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  return (
    <div className="flex flex-row gap-2 text-white">
      <button
        onClick={() => handleClick("en")}
        className={` ${locale === "en" ? "font-bold " : ""}`}
      >
        English
      </button>
      <span>|</span>
      <button
        onClick={() => handleClick("es")}
        className={` ${locale === "es" ? "font-bold " : ""}`}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
