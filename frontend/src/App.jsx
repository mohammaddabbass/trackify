
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth'  element={<AuthPage/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard'  element={<Dashboard/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
