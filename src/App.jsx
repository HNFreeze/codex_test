import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Animales from './pages/Animales';
import Protectoras from './pages/Protectoras';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/protectoras" element={<Protectoras />} />
      </Routes>
    </>
  );
}