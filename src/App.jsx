import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}