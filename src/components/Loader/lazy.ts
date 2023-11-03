import { lazy } from 'react'
import Loader from '.'

export const MainPage = Loader(lazy(() => import('src/pages/MainPage')))
export const Navigation = Loader(lazy(() => import('src/components/Navigation')))
