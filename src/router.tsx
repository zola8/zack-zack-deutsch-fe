import { createBrowserRouter } from 'react-router';
import './index.css'
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import RootLayout from './layouts/RootLayout';
import AboutPage from './pages/AboutPage';
import TranslationPage from './pages/TranslationPage';
import LoginPage from './pages/LoginPage';
import LoginCallbackPage from './pages/LoginCallbackPage';
import UserPage from './pages/UserPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'translate', element: <TranslationPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'login/callback', element: <LoginCallbackPage /> },
      { path: 'me', element: <UserPage /> },
      
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
