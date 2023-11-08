import { Grid } from '@mui/material'
import { INVITED_LECTURER } from '@src/data/introduction'
import LectureContainer from './LectureContainer'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'

const OrganizerPage = () => {
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="INTRODUCTION" />
        </Grid>
        {INVITED_LECTURER.map((lecturer, index) => (
          <LectureContainer lecturer={lecturer} key={index} />
        ))}
      </Grid>
    </PageContainer>
  )
}

export default OrganizerPage
