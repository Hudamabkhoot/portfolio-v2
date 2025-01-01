'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/variants'
import { useState } from 'react';

export default function FadeIn({ children, delay = 0.2, preventReHide = false }) {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const initialState = preventReHide && hasBeenInView ? 'show' : 'hidden';

  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial={initialState}
      whileInView={'show'}
      onViewportEnter={() => {
        if (preventReHide) {
          setHasBeenInView(true);
        }
      }}
      viewport={{ once: preventReHide ? true : false, amount: 0.7 }}
    >
        {children}
    </motion.div>
  )
}
