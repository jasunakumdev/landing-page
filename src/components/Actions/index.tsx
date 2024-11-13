import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import Logo from '../../assets/Logo-48.png'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'
import LinkedIn from '../../assets/linkedin.svg'

const Actions = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: '16px', md: '48px', lg: '96px' },
        paddingRight: { xs: '16px', md: '48px', lg: '96px' },
        marginTop: { xs: '16px' },
        backgroundColor: theme.palette.custom.lightSky,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{
            padding: { xs: '16px', md: '16px', lg: '48px' },
            borderRadius: '32px',
          }}
        >
          <img src={Logo} alt="" width="70%" />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            padding: { xs: '8px', md: '16px', lg: '48px' },
          }}
        >
          <Box display="flex" justifyContent="space-around">
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Solutions
              </Typography>

              <Link href="#" underline="none">
                Small Business
              </Link>
              <Link href="#" underline="none">
                Freelancers
              </Link>
              <Link href="#" underline="none">
                Customers
              </Link>
              <Link href="#" underline="none">
                Taxes
              </Link>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Company
              </Typography>

              <Link href="#" underline="none">
                About Us
              </Link>
              <Link href="#" underline="none">
                Career
              </Link>
              <Link href="#" underline="none">
                Contact
              </Link>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Learn
              </Typography>

              <Link href="#" underline="none">
                Blog
              </Link>
              <Link href="#" underline="none">
                Ebooks
              </Link>
              <Link href="#" underline="none">
                Guides
              </Link>
              <Link href="#" underline="none">
                Templates
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3, lg: 3 }}
          sx={{
            padding: { xs: '36px', md: '48px' },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'center', md: 'flex-end' }}
            textAlign={{ xs: 'center', md: 'right' }}
          >
            <Box>Follow us on</Box>
            <Box
              mt={2}
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
            >
              <img src={Twitter} alt="Twitter" height={32} width={32} />
              <img src={LinkedIn} alt="LinkedIn" height={32} width={32} />
              <img src={Facebook} alt="Facebook" height={32} width={32} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Actions
