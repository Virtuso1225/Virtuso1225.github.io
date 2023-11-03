import { useRoutes } from 'react-router-dom'
import router from './router'

const App = () => {
  const content = useRoutes(router)

  return <>{content}</>
}

export default App
