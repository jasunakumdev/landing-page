import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'

type FeatureBoxProps = {
  icon: React.ReactNode
  title: string
  description: string
}
const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
}) => {
  const theme = useTheme()
  return (
    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
      <Box mt={8}>
        {icon}
        <Typography fontSize="32px">{title}</Typography>
        <Typography
          style={{ fontSize: '20px' }}
          color={theme.palette.secondary.main}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

export default FeatureBox
