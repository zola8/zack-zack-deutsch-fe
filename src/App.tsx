import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
import NotFound from './pages/NotFound';
import Translation from './pages/Translation';
import GrammarCheck from './pages/GrammarCheck';
import Dictionary from './pages/Dictionary';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import UserProfileDetails from './pages/UserProfileDetails';
import UserProfileSettings from './pages/UserProfileSettings';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/grammar-check" element={<GrammarCheck />} />
            <Route path="/dictionary" element={<Dictionary />} />

            <Route path="/settings" element={<UserProfileSettings />} />
            <Route path="/profile" element={<UserProfileDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/login/callback" element={<LoginCallback />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
