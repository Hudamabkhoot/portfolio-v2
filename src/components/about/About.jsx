import { useLocale, useTranslations } from "next-intl";
import Heading from "../Heading";
import Timeline from "./Timeline";

export default function About() {
  const t = useTranslations('About');
  const locale = useLocale()
 
  return (
    <div className="hero bg-main-white min-h-screen py-8" id="about">

    <div className="hero-content flex flex-col">
    <Heading name={
            locale === 'ar' ? (
              <>
                {t('title')} <span className="text-main-purple">مطور واجهات أمامية </span>
              </>
            ) : (
              t.rich('title', {
                span: (chunks) => <span className="text-main-purple">{chunks}</span>
                }
            ))
          }/>
    <Timeline />
    </div>
  </div>
  )
}
