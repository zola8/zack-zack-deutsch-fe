import { createBrowserRouter } from 'react-router';
import './index.css'
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import RootLayout from './layouts/RootLayout';
import AboutPage from './pages/AboutPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
