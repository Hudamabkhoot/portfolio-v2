import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';


export default function Navbar() {

  const t = useTranslations('Nav');

const Links = [
  { href: '#hero', text: t('navOne')},
  { href: '#porjects', text: t('navTwo')},
  { href: '#skills', text: t('navThree')},
  { href: '#contact', text: t('navFour')},

]

  return (
  <nav className="navbar bg-main-white shadow-lg sticky font-cairo">
    <div className="flex-1">
      <Link href='/' className="text-xl font-medium text-dark-blue">Huda<span className="text-main-purple">Mab</span></Link>
    </div>
    <DesktopNavbar Links={Links}/>
    <MobileNavbar Links={Links} />
  </nav>

  )
}
