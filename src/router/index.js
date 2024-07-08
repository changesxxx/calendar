import { lazy } from 'react'

import Main from '@/view/main/Main'

const CreateEvent = lazy(() => import('@/view/createEvent/CreateEvent'))

const routes = [
  {
    path: '/',
    element: <Main></Main>,
  },
  {
    path: '/createEvent',
    element: <CreateEvent></CreateEvent>,
  },
]

export default routes
