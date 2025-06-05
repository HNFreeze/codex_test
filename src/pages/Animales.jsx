import useAnimales from '../hooks/useAnimales';

export default function Animales() {
  const { animales, loading, error } = useAnimales();

  if (loading) return <p>Cargando animales...</p>;
  if (error) return <p>Error al cargar animales</p>;

  return (
    <div>
      <h2>Lista de animales disponibles para adopción</h2>
      <ul>
        {animales.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}
