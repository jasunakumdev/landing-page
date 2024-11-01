import './App.css'
import ApplicationAppBar from './components/AppBar'
import Container from '@mui/material/Container'
import Payments from './components/Payments'
function App() {
  return (
    <Container maxWidth={false} sx={{ width: '100%' }}>
      <ApplicationAppBar />
      <Payments />
    </Container>
  )
}

export default App
