import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Animales from './pages/Animales';
import Protectoras from './pages/Protectoras';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/animales">Animales</Link> | <Link to="/protectoras">Protectoras</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/protectoras" element={<Protectoras />} />
      </Routes>
    </>
  );
}