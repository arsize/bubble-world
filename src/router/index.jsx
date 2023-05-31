import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import NoFind from '@/views/404'
import Layout from '@/layout'

import { rootLoader } from './loader'
import React from 'react'

const LazyLoad = (Component) => {
  return (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  )
}

const _routes = [
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
