import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

import NoFind from '@/views/NoFind'
import Layout from '@/layout'

import { rootLoader } from './loader'
import React from 'react'

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
      {
        path: '/world',
        element: LazyLoad(lazy(() => import('@/views/world'))),
      },
      {
        path: '/all',
        element: LazyLoad(lazy(() => import('@/views/world/allWorld'))),
      },
      {
        path: '/article',
        element: LazyLoad(lazy(() => import('@/views/article'))),
      },
      {
        path: '/write',
        element: LazyLoad(lazy(() => import('@/views/write'))),
      },
      {
        path: '/user',
        element: LazyLoad(lazy(() => import('@/views/user'))),
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
