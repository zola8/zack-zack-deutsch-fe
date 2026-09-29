import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
import NotFound from './pages/NotFound';
import Page1 from './pages/Page1';
import Translation from './pages/Translation';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/" element={<Page1 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
