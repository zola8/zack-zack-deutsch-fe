import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import NotFound from './pages/NotFound';


const Page1 = () => <div className="p-4">Page 1 - Dashboard</div>;
const Page2 = () => <div className="p-4">Page 2 - Vocabulary</div>;
const Page3 = () => <div className="p-4">Page 3 - Speaking</div>;
const Page4 = () => <div className="p-4">Page 4 - Grammar</div>;
const Page5 = () => <div className="p-4">Page 5 - Settings</div>;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
