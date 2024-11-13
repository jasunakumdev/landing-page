import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'

interface RevenueCardProps {
  title: string
  description: string
}

const RevenueCard: React.FC<RevenueCardProps> = ({ title, description }) => {
  return (
    <Grid size={{ xs: 12, md: 3, lg: 3 }} p={4}>
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: '48px', md: '48px', lg: '96px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

const Revenue = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
        paddingRight: { xs: '16px', md: '48px', lg: '96px' },
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <RevenueCard title="24%" description="Revenue Business" />
        <RevenueCard title="180k" description="In annual revenue" />
        <RevenueCard title="10+" description="Months of runway" />
      </Grid>
    </Box>
  )
}

export default Revenue
