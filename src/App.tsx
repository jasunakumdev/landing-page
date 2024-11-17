import { motion, useScroll } from 'framer-motion'
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import ApplicationAppBar from './components/AppBar'
import Payments from './components/Payments'
import FuturePayment from './components/FuturePayment'
import WhyUs from './components/WhyUs'
import Stats from './components/Stats'
import AccountSteps from './components/AccountSteps'
import Mission from './components/Mission'
import Revenue from './components/Revenue'
import Plans from './components/Plans'
import PaymentProcess from './components/PaymentProcess'
import Actions from './components/Actions'
import Footer from './components/Footer'

import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const theme = useTheme()

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          background: theme.palette.primary.main,
        }}
      />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}
      >
        <ApplicationAppBar />
        <Payments />
        <FuturePayment />
        <WhyUs />
        <Stats />
        <AccountSteps />
        <Mission />
        <Revenue />
        <Plans />
        <PaymentProcess />
        <Actions />
        <Footer />
      </Container>
    </>
  )
}

export default App
