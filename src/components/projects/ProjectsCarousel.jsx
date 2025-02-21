import { useTranslations } from "next-intl";
import Project from "./Project";
import { getData } from '../../lib/actions/getData'

export default async function ProjectsCarousel({locale}) {
  const t = useTranslations('Projects');
  const data = await getData()

  return (
   <div className={`carousel carousel-center rounded-box max-w-full space-x-4 p-4 my-5 ${locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
    {data.map((project) => {
      return (
            <Project key={project.id} project={project} label={t("link")} locale={locale}/>
        )
    })}
  </div>
  )
}


