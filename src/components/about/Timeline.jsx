'use client'
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { changeSVGColor, fadeIn } from "@/app/variants";
import FadeIn from "../FadeIn";
import { useState } from "react";

export default function Timeline() {
    const [hasBeenInView, setHasBeenInView] = useState(false);

    const initialState = hasBeenInView ? 'show' : 'hidden';

    const t = useTranslations('About');
    const locale = useLocale()

    const dates = [
        { monthYear: t('dateOne'), description: t('textOne')},
        { monthYear: t('dateTwo'), description: t('textTwo')},
        { monthYear: t('dateThree'), description: t('textThree')},
        { monthYear: t('dateFour'), description: t('textFour')},
        { monthYear: t('dateFive'), description: t('textFive')},
        { monthYear: t('dateSix'), description: t('textSix')},
        { monthYear: t('dateSeven'), description: t('textSeven')},
        { monthYear: t('dateEight'), description: t('textEight')},
        { monthYear: t('dateNine'), description: t('textNine')},
        { monthYear: t('dateTen'), description: t('textTen')},
    ]
  return (
    <ul className="timeline timeline-vertical">
    {dates.map((date, index) => {
  return (
    <li key={index} className="timeline-item gap-4">
      <div className={`${index % 2 === 0 ? "timeline-start" : "timeline-end"}`}>{date.monthYear}</div>
      <div className="timeline-middle">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-5 w-5"
          fill="currentColor"
          initial="gray"
          animate="purple"
          variants={changeSVGColor(index * 0.3)}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </motion.svg>
      </div>
      <motion.div
      variants={fadeIn(`${index % 2 === 0 ? "left" : "right"}`, index * 0.1)}
      initial={initialState}
      whileInView={'show'}
      onViewportEnter={() => {
          setHasBeenInView(true);
      }}
      viewport={{ once: true, amount: 0.7 }}
     className={`${index % 2 === 0 ? "timeline-end" : "timeline-start"} ${locale === 'ar' ? 'text-right' : ''} timeline-box bg-main-white text-main-black text-sm`}>
            {date.description}
        </motion.div>
      {index !== dates.length - 1 && <hr />}
    </li>
  );
})}
    </ul>
  )
}
