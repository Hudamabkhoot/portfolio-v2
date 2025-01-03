'use client'
import { useLenis } from 'lenis/react'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from './LocaleSwitcher'

export default function DesktopNavbar({Links, locale}) {
  const lenis = useLenis(({ scroll }) => { })

  return (
    <div className={`flex-none hidden lg:flex ${locale === 'ar' && 'flex-row-reverse'}`}>
    <ul className={`flex items-center justify-around gap-5 px-1 ${locale === 'ar' && 'flex-row-reverse'} hover:bg-none`}>
      {Links.map((link) => {
        return (
          <li className="hover:text-main-purple" key={link.text} onClick={() => lenis.scrollTo(link.href, {duration:2})}>
            <Link href={link.href}>
            {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
    <LocaleSwitcher locale={locale}/>
  </div>
  )
}
