import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherButton'
import LocaleSwitcherButton from './LocaleSwitcherButton';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale()
    const locales = ['en', 'ar'];

  return (
    <>
    <LocaleSwitcherButton label={t('label')} locale={locale}/>
    </>
  )
}
