'use client'
import { useParams } from "next/navigation"
import {useRouter, usePathname} from '@/i18n/routing'
import { useTransition } from "react"
import { useLocale } from "next-intl"

export default function LocaleSwitcherButton({label, locale}) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const pathname = usePathname()
    const params = useParams()

    function handleLocaleChange() {
        const nextLocale = locale === 'en' ? 'ar' : 'en'

        startTransition(() => {
            router.replace(
                {pathname, params},
                {locale: nextLocale}
            )
        })
    }
  return (
    <button
            onClick={handleLocaleChange}
            disabled={isPending}
            className={`relative ${isPending ? '[&:disabled]:opacity-30' : ''} bg-main-white border-0 px-4 py-2 rounded-md text-base hover:text-main-purple`}
            aria-label={label}
        >
            {label}
        </button>
  )
}
