import { Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/common/Layout'
import { UserProvider } from './context/UserContext'
import './styles/globals.css'
import './styles/variables.css'
import './styles/animations.css'

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Layout>
          <Outlet />
        </Layout>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
