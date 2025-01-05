import { useLocale, useTranslations } from "next-intl";
import Heading from "../Heading";
import ProjectsCarousel from './ProjectsCarousel'

export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale()

  return (
    <div className="min-h-[70vh] md:min-h-screen p-4 md:my-8 flex flex-col gap-10 md:gap-20" id="porjects">
        <Heading name={
            locale === 'ar'
              ? (
                <>
                  {t('title')} <span className="text-main-purple">  المشاريع</span>
                </>
              )
              : t.rich('title', {
                span: (chunks) => <span className="text-main-purple">{chunks}</span>
                })
          }/>
        <ProjectsCarousel locale={locale}/>
    </div>
  )
}
