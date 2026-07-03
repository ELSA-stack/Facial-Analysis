import { Outlet } from 'react-router-dom'
import Layout from './components/common/Layout'
import './styles/globals.css'
import './styles/variables.css'
import './styles/animations.css'

// Main app layout that wraps all pages.
function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
