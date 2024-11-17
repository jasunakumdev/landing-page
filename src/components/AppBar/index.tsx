import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Button from '../../common/components/Button'
import Logo from '../../assets/logo-99.png'
import { useMediaQuery, useTheme } from '@mui/material'

const PAGES = ['Products', 'Customer', 'Pricing', 'Learning']

function ApplicationAppBar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: theme.palette.custom.lightSky,
        color: 'black',
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {!isMobile && <img src={Logo} height={30} alt="Logo" />}

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: 'black' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <img src={Logo} height={25} alt="Logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', marginLeft: '24px' },
            }}
          >
            {PAGES.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  textTransform: 'none',
                  marginRight: '16px',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            display="flex"
            align-items="center"
            justifyContent="end"
          >
            <Button
              variant="outlined"
              sx={{ marginRight: 1, textTransform: 'none' }}
              size="small"
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              color="primary"
              size="small"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ApplicationAppBar
