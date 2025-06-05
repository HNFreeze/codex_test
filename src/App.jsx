import { Link } from 'react-router-dom';
import AppRoutes from './routes';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/animales">Animales</Link> | <Link to="/protectoras">Protectoras</Link>
      </nav>
      <AppRoutes />
    </>
  );
}
