'use client'
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import { useLocale } from 'use-intl'


export default function Navbar() {
  const t = useTranslations('Nav');
  const locale = useLocale()

const Links = [
  { href: '#hero', text: t('navOne')},
  { href: '#about', text: t('navTwo')},
  { href: '#porjects', text: t('navThree')},
  { href: '#skills', text: t('navFour')},
  { href: '#contact', text: t('navFive')},
]

  return (
  <nav className={`navbar bg-main-white shadow-lg sticky font-cairo ${locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
    <div className={`flex-1 ${locale === 'ar' && 'flex-row-reverse'}`}>
      <Link href='/' className="text-xl font-medium text-dark-blue">Huda<span className="text-main-purple">Mab</span></Link>
    </div>
    <DesktopNavbar Links={Links} locale={locale}/>
    <MobileNavbar Links={Links} locale={locale}/>
  </nav>

  )
}
