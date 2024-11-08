import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Revenue = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '112px' },
        paddingRight: { xs: '16px', md: '112px' },
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid size={{ xs: 12, md: 3, lg: 3 }} p={4}>
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
              }}
            >
              24%
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
              }}
            >
              Revenue Business
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 3, lg: 3 }} p={4}>
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
              }}
            >
              180k
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
              }}
            >
              In annual revenue
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 3, lg: 3 }} p={4}>
          <Box>
            <Typography
              sx={{
                fontSize: '96px',
              }}
            >
              10+
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
              }}
            >
              Months of runway
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Revenue
