import { Typewriter, Cursor } from 'nextjs-simple-typewriter'

export default function TypingEffect({firstText, secondText, locale}) {

  return (
      <span className='text-main-purple text-lg md:text-xl'>
        {locale === 'ar' && <span className="font-light text-gray-500"><Cursor cursorBlinking={true} /></span>}
        <Typewriter
        words={[firstText, secondText, firstText]}
        typeSpeed={80}
        deleteSpeed={70}
        delaySpeed={1000}
        loop={Infinity}
        />
         {locale === 'en' && <span className="font-light text-gray-500"><Cursor  cursorBlinking={true} /></span>}
      </span>
  )
}