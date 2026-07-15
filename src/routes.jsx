import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Loading from './pages/Loading'
import Result from './pages/Result'
import About from './pages/About'
import NotFound from './pages/NotFound'

// Router configuration for the app pages.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'upload', element: <Upload /> },
      { path: 'loading', element: <Loading /> },
      { path: 'result', element: <Result /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
