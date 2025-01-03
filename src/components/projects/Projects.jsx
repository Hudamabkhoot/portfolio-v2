import { useLocale, useTranslations } from "next-intl";
import Heading from "../Heading";


const Carousel = dynamic(() => import("./ProjectsCarousel"), {
  loading: () => <span className="loading loading-spinner loading-sm"></span>,
});


export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale()

  return (
    <div className="min-h-screen p-4 my-8" id="porjects">
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
        <Carousel locale={locale}/>
    </div>
  )
}
