
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth'  element={<AuthPage/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
