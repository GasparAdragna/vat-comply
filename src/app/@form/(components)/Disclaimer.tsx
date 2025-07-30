import { useTranslations } from "next-intl";

const Disclaimer = () => {
  const t = useTranslations("disclaimer");
  return (
    <div className="max-w-[518px] pl-8 pr-4 pt-5 pb-4 bg-[#E5E5FF] rounded-lg">
      <p className="text-sm leading-9">{t("text")}</p>
    </div>
  );
};

export default Disclaimer;
