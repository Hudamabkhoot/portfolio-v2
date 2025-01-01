import { useLocale, useTranslations } from "next-intl";
import Heading from "../Heading";
import ProjectsCarousel from "./ProjectsCarousel";


export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale()

  return (
    <div className="min-h-screen p-4 my-8" id="porjects">
        <Heading name={t.rich('title', {
          span: (chunks) => <span className="text-main-purple">{chunks}</span>
          })}
          addedClass={`${locale === 'en' ? 'max-w-[450px]' : 'max-w-60'} border-b-4 border-b-main-purple pb-2`}/>
        <ProjectsCarousel />
    </div>
  )
}
