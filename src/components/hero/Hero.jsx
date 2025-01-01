import { useTranslations } from "next-intl";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="hero bg-main-white min-h-screen" id="hero">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-main-black">{t('title')}</h1>
        <p className="font-bold mt-3">
        <TypingEffect firstText={t('parOne')} secondText={t('parTwo')}/>
        </p>
      </div>
    </div>
  </div>
  )
}
