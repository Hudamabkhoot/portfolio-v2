
import { Typewriter } from 'nextjs-simple-typewriter'

export default function TypingEffect({firstText, secondText}) {
  return (
      <span className='text-main-purple text-lg md:text-xl'>
        <Typewriter
        words={[firstText, secondText, firstText]}
        typeSpeed={70}
        deleteSpeed={70}
        delaySpeed={1000}
        loop={4}
        cursor
        />
      </span>
  )
}