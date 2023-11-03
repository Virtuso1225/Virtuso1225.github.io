import type { RouteObject } from 'react-router-dom'
import { MainPage, Navigation } from '@src/components/Loader/lazy'
import AgendaPage from './pages/AgendaPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'
import NotFoundPage from './pages/NotFoundPage'
import LocationPage from './pages/LocationPage'

const routes: RouteObject[] = [
  {
    path: '',
    element: <Navigation />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: '/agenda',
        element: <AgendaPage />
      },
      {
        path: '/location',
        element: <LocationPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/join',
        element: <JoinPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]

export default routes
