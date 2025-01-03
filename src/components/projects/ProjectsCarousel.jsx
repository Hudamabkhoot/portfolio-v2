import { useTranslations } from "next-intl";
import { getProjects } from "../../../_actions/projectAction";
import Project from "./Project";

export default async function ProjectsCarousel({locale}) {
  const t = useTranslations('Projects');
  const { data } = await getProjects()


  return (
   <div className={`carousel carousel-center rounded-box max-w-full space-x-4 p-4 my-5 ${locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
    {data.map((project, index) => {
      const projectDesc = t(`${index}`);
      return (
            <Project key={project._id} project={{ ...project, desc: projectDesc }} label={t("link")} locale={locale}/>
        )
    })}
  </div>
  )
}


