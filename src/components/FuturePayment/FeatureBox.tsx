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
      <Box mt={8} p={1}>
        {icon}
        <Typography fontSize="30px" mb={1}>
          {title}
        </Typography>
        <Typography
          style={{ fontSize: '16px' }}
          color={theme.palette.secondary.main}
          width="90%"
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  )
}

export default FeatureBox
