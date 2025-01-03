'use client'
import { useLenis } from 'lenis/react'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from './LocaleSwitcher'
import { useState } from 'react'

export default function MobileNavbar({Links, locale}) {
  const lenis = useLenis(({ scroll }) => { })
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex-none lg:hidden ${locale === 'ar' && 'flex-row-reverse'}`}>
    <LocaleSwitcher locale={locale}/>
    <div className="relative">
        <button
          className="flex flex-col justify-center items-center"
          onClick={handleClick}
        >
          {/* Hamburger Icon */}
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
          <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-0' : 'translate-y-0.5'}`} ></span>
        </button>
        {/* Dropdown Content */}
        {isOpen && (
          <ul className={`fixed ${locale === 'ar' ? 'text-right' : ''}  bg-main-white border border-main-gray rounded-lg z-10 w-32 p-4 shadow-md top-12 ${locale === 'ar' ? 'left-0' : 'right-0'}`}>
            {Links.map((link) => (
              <li
                key={link.text}
                className="hover:text-main-purple py-2"
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
  </div>
  )
}
