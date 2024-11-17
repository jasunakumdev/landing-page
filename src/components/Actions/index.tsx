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
      component="section"
      role="region"
      aria-labelledby="actions-heading"
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
          <img src={Logo} alt="Company Logo" width="70%" />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6, lg: 6 }}
          sx={{
            padding: { xs: '8px', md: '16px', lg: '48px' },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            component="nav"
            role="navigation"
            aria-labelledby="actions-navigation"
          >
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Solutions
              </Typography>

              <Link
                href="#"
                underline="none"
                aria-label="Learn about small business solutions"
              >
                Small Business
              </Link>
              <Link
                href="#"
                underline="none"
                aria-label="Explore freelancer solutions"
              >
                Freelancers
              </Link>
              <Link
                href="#"
                underline="none"
                aria-label="Customer solutions information"
              >
                Customers
              </Link>
              <Link
                href="#"
                underline="none"
                aria-label="Tax solutions overview"
              >
                Taxes
              </Link>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Company
              </Typography>

              <Link href="#" underline="none" aria-label="About our company">
                About Us
              </Link>
              <Link
                href="#"
                underline="none"
                aria-label="Explore career opportunities"
              >
                Career
              </Link>
              <Link href="#" underline="none" aria-label="Contact us">
                Contact
              </Link>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="bold" fontSize="20px" mb={2}>
                Learn
              </Typography>

              <Link href="#" underline="none" aria-label="Read our blog">
                Blog
              </Link>
              <Link href="#" underline="none" aria-label="Access free ebooks">
                Ebooks
              </Link>
              <Link href="#" underline="none" aria-label="Guides for learning">
                Guides
              </Link>
              <Link
                href="#"
                underline="none"
                aria-label="Download free templates"
              >
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
            <Typography component="p" fontWeight="bold">
              Follow us on
            </Typography>
            <Box
              mt={2}
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
            >
              <img
                src={Twitter}
                height={32}
                width={32}
                alt="Follow us on Twitter"
              />
              <img
                src={LinkedIn}
                height={32}
                width={32}
                alt="Connect with us on LinkedIn"
              />
              <img
                src={Facebook}
                height={32}
                width={32}
                alt="Like us on Facebook"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Actions
