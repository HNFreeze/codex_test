export default function AnimalCard({ nombre, especie, edad }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    margin: '0.5rem',
    maxWidth: '220px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      <h3>{nombre}</h3>
      <p>Especie: {especie}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

