import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import NoFind from '@/views/NoFind'
import Layout from '@/layout'

import { rootLoader } from './loader'

const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  )
}

const _routes: RouteObject[] = [
  {
    path: '/',
    id: 'root',
    loader: rootLoader,
    element: <Layout />,
    children: [
      {
        index: true,
        element: LazyLoad(lazy(() => import('@/views/home'))),
      },
      {
        path: '/stack',
        element: LazyLoad(lazy(() => import('@/views/stack'))),
      },
    ],
  },
  {
    path: '/login',
    element: LazyLoad(lazy(() => import('@/views/login'))),
  },
  {
    path: '*',
    element: <NoFind />,
  },
]

export const routes = createBrowserRouter(_routes)
