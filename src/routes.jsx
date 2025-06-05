import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Animales from './pages/Animales';
import Protectoras from './pages/Protectoras';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animales" element={<Animales />} />
      <Route path="/protectoras" element={<Protectoras />} />
    </Routes>
  );
}
