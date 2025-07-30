import { HEADER_BACKGROUND } from "@/constants/theme";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("home");

  return (
    <header
      className={`w-full bg-[${HEADER_BACKGROUND}] h-[60px] items-center flex justify-between py-5 pl-4 lg:pl-14 pr-4 shadow-md`}
    >
      <h1 className="text-white">{t("title")}</h1>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
