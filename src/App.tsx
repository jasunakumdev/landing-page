import './App.css'
import ApplicationAppBar from './components/AppBar'
import Container from '@mui/material/Container'

function App() {
  return (
    <Container maxWidth={false} sx={{ width: '100%' }}>
      <ApplicationAppBar />
    </Container>
  )
}

export default App
