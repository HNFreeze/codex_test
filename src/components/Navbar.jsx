import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{' '}
      <Link to="/animales">Animales</Link> |{' '}
      <Link to="/protectoras">Protectoras</Link>
    </nav>
  );
}
