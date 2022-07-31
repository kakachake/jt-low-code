import { FC, lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import Loading from '@/components/loading/Loading'

const Home = lazy(() => import('@/pages/home/Home'))
const Editor = lazy(() => import('@/pages/editor/Editor'))

type RouteObj = RouteObject & {
  needLazy?: boolean
}

export const Router: FC = () => {
  const routesArr = [
    {
      path: '/',
      element: <Home />,
      needLazy: true
    },
    {
      path: '/editor',
      element: <Editor />,
      needLazy: true
    }
  ]

  const routes = useRoutes(parseRoute(routesArr))
  return routes
}

function parseRoute(route: RouteObj[]): RouteObject[] {
  return route.map((item) => {
    if (item.element) {
      let parseItem = { ...item }
      if (item.needLazy) {
        parseItem = {
          ...parseItem,
          element: <Suspense fallback={<Loading />}>{parseItem.element}</Suspense>
        }
      }
      return parseItem
    }
    return item
  }) as RouteObject[]
}
