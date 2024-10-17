/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Root from './components/Root';
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
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'alerts',
        element: <Alerts />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'reports',
        element: <Reports />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'studio',
        element: <Studio />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'settings',
        element: <Settings />,
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
