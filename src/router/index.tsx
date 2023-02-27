import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'

import NoFind from '@/views/NoFind'
import Layout from '@/layout'

import { rootLoader } from './loader'

const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  )
}

const router_config: RouteObject[] = [
  {
    path: '/',
    id: 'root',
    loader: rootLoader,
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: LazyLoad(lazy(() => import('@/views/home'))),
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

export const routes = createBrowserRouter(router_config)
