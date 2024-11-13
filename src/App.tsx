import './App.css'
import ApplicationAppBar from './components/AppBar'
import Container from '@mui/material/Container'
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
// https://dribbble.com/shots/24820686-Finpay-Fintech-Landing-Page
function App() {
  return (
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
  )
}

export default App
