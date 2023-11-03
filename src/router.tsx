import type { RouteObject } from 'react-router-dom'
import { MainPage, Navigation } from '@src/components/Loader/lazy'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigation />,
    children: [
      {
        path: '',
        element: <MainPage />
      }
    ]
  }
]

export default routes
