import { useTranslations } from "next-intl";
import Heading from "../Heading";
import SkillsCarousel from "./SkillsCarousel";

export default function SkillsSection() {
  const t = useTranslations('Skills');

  return (
    <div className='relative min-h-screen flex flex-col items-center' id="skills">
        <Heading name={t('title')} addedClass={`border-b-4 border-b-main-purple pb-2`}/>
        <SkillsCarousel />
    </div>
  )
}
