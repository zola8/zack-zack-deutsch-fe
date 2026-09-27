import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
import NotFound from './pages/NotFound';

const Page1 = () => <div className="p-4">Dashboard</div>;
const Page2 = () => <div className="p-4">Vocabulary</div>;
const Page3 = () => <div className="p-4">Speaking</div>;
const Page4 = () => <div className="p-4">Grammar</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
