'use client'

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Skill from "./Skill";

export default function SkillsCarousel() {
  
    const images = [
      {text: 'React.js', img: "/images/react.svg"},
       {text: 'JavaScript', img:  "/images/js.svg"},
         {text: 'TypeScript', img: "/images/typescript.svg"},
         {text: 'HTML', img: "/images/html.svg"},
         {text: 'CSS', img: "/images/css.svg"},
         {text: 'Tailwind CSS', img: "/images/tailwind.svg"},
         {text: 'Redux', img: "/images/redux.svg"},
         {text: 'Firebase', img: "/images/firebase.svg"},
         {text: 'Git', img: "/images/git.svg"},
         {text: 'Vite', img: "/images/vite.svg"},
      ];

      const FAST_DURATION = 25;
      const SLOW_DURATION = 75;
    
      const [duration, setDuration] = useState(FAST_DURATION);
      let [ref, { width }] = useMeasure();

      const xTranslation = useMotionValue(0);
    
      const [mustFinish, setMustFinish] = useState(false);
      const [rerender, setRerender] = useState(false);
    
      useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;
    
        if (mustFinish) {
          controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
            ease: "linear",
            duration: duration * (1 - xTranslation.get() / finalPosition),
            onComplete: () => {
              setMustFinish(false);
              setRerender(!rerender);
            },
          });
        } else {
          controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          });
        }

        return controls?.stop;
      }, [rerender, xTranslation, duration, width]);

      return (
        <div className="py-8 cursor-pointer">
        <motion.div
          className="absolute left-0 flex gap-4"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
            <Skill images={[...images, ...images]} />
        </motion.div>
      </div>
  )
}
