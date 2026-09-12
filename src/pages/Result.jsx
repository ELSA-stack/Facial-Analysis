import { useLocation } from 'react-router-dom'
import ResultPage from '../components/ResultPage'

function Result() {
  const location = useLocation()
  const data = location.state || {}

  return <ResultPage data={data} />
}

export default Result
