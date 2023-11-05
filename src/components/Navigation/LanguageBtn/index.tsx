import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LanguageBtn = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if (i18n.language === 'ko') i18n.changeLanguage('en')
    else i18n.changeLanguage('ko')
  }

  return (
    <Button sx={{ mr: 1 }} onClick={changeLanguage}>
      <Typography variant="caption" fontWeight={'bold'} color={'secondary'}>
        {t('language')}
      </Typography>
    </Button>
  )
}

export default LanguageBtn
