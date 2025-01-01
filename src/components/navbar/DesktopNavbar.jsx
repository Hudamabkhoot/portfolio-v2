'use client'
import { useLenis } from 'lenis/react'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from './LocaleSwitcher'
import { useLocale } from 'next-intl'

export default function DesktopNavbar({Links}) {
  const lenis = useLenis(({ scroll }) => { })
  const locale = useLocale()

  return (
    <div className="flex-none hidden lg:flex">
    <ul className={`menu menu-horizontal px-1 ${locale === 'ar' && 'flex-row-reverse'}`}>
      {Links.map((link) => {
        return (
          <li className="" key={link.text} onClick={() => lenis.scrollTo(link.href, {duration:2})}>
            <Link href={link.href}>
            {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
    <LocaleSwitcher/>
  </div>
  )
}
