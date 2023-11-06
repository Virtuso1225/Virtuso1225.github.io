import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface LogoProps {
  handleClicked: () => void
}
const Logo = ({ handleClicked }: LogoProps) => {
  const { t } = useTranslation()
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={handleClicked}>
      <Typography variant="h5" fontWeight={700} lineHeight="normal">
        {t('logo')}
      </Typography>
    </Link>
  )
}

export default Logo
