import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import ScheduleGrid from './ScheduleGrid'
import { LinkTypography } from '@src/components/LinkBox'
import { Link } from 'react-router-dom'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'

const ProgramPage = () => {

  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="PROGRAM" />
        </Grid>
        <Grid item marginY={2}>
          <Link to={'/location'} style={{ textDecoration: 'none' }}>
            <LinkTypography>
              <Typography>모든 강연은 강당 (B112호)에서 진행됩니다.</Typography>
            </LinkTypography>
          </Link>
        </Grid>
        <ScheduleGrid />
      </Grid>
    </PageContainer>
  )
}

export default ProgramPage
