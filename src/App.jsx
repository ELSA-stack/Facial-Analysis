import { Outlet } from 'react-router-dom'
import Layout from './components/common/Layout'
import { UserProvider } from './context/UserContext'
import './styles/globals.css'
import './styles/variables.css'
import './styles/animations.css'

// Main app layout that wraps all pages.
function App() {
  return (
    <UserProvider>
      <Layout>
        <Outlet />
      </Layout>
    </UserProvider>
  )
}

export default App
