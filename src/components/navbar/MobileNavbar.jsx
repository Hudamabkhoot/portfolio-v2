'use client'
import { useLenis } from 'lenis/react'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from './LocaleSwitcher'

export default function MobileNavbar({Links}) {
  const lenis = useLenis(({ scroll }) => { })

  return (
    <div className="flex-none lg:hidden">
    <LocaleSwitcher/>
    <details className="dropdown">
    <summary className="btn m-1 bg-main-white border-none hover:bg-main-white hover:text-dark-blue">
    <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </summary>
      <ul className="menu dropdown-content bg-main-white border border-main-gray rounded-box z-1 w-46 p-2 shadow-sm right-0 top-10">
      {Links.map((link) => {
          return (
            <li key={link.text} onClick={() => lenis.scrollTo(link.href, {duration:2})}>
              <Link href={link.href}>
              {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </details>
  </div>
  )
}
