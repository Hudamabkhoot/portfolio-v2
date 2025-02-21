import { useLocale, useTranslations } from "next-intl";
import Heading from "../Heading";
import SkillsCarousel from "./SkillsCarousel";
import SkillCard from "./SkillCard";
import FadeIn from "../FadeIn";



export default function SkillsSection() {

  const t = useTranslations('Skills');
  const locale = useLocale()

const frontend = [
  {text: 'Next.js'},
  {text: 'React.js'},
  {text: 'JavaScript'},
  {text: 'TypeScript'},
  {text: 'HTML & CSS'}
];


const tools = [
  {text: 'MongoDB'},
  {text: 'Tailwind CSS'},
  {text: 'Redux'},
  {text: 'Firebase'},
  {text: 'Git'}
]


  return (
    <div className='relative min-h-[70vh] md:min-h-screen flex flex-col items-center gap-10 md:gap-20' id="skills">
        <Heading name={
            locale === 'ar' ? (
              <>
                {t('title')} <span className="text-main-purple">و الخبرات</span>
              </>
            ) : (
              t('title')
            )
          } addedClass={`mt-14`}/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1} preventReHide={true}>
            <SkillCard data={frontend} title={'Frontend'}/>
          </FadeIn>
          <FadeIn delay={0.2} preventReHide={true}>
            <SkillCard data={tools} title={'Tools'}/>
          </FadeIn>
        </div>
        <SkillsCarousel />
    </div>
  )
}
