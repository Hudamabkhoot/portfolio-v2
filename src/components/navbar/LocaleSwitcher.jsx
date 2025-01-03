import { useTranslations } from 'next-intl'
import LocaleSwitcherButton from './LocaleSwitcherButton';

export default function LocaleSwitcher({locale}) {
    const t = useTranslations('LocaleSwitcher')

  return (
    <>
    <LocaleSwitcherButton label={t('label')} locale={locale}/>
    </>
  )
}
