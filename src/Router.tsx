/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Root from './components/Root';
import { Spinner } from '@chakra-ui/react';
const Alerts = lazy(() => import('./pages/Alerts'));
const Reports = lazy(() => import('./pages/Reports'));
const Studio = lazy(() => import('./pages/Studio'));
const Settings = lazy(() => import('./pages/Settings'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => redirect('/dashboard'),
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: 'alerts',
        element: (
          <Suspense fallback={<Spinner />}>
            <Alerts />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: 'reports',
        element: (
          <Suspense fallback={<Spinner />}>
            <Reports />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: 'studio',
        element: (
          <Suspense fallback={<Spinner />}>
            <Studio />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<Spinner />}>
            <Settings />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
