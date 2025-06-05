import { useEffect, useState } from 'react';

export default function useAnimales() {
  const [animales, setAnimales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnimales() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!response.ok) {
          throw new Error('Error al obtener animales');
        }
        const data = await response.json();
        const list = Object.keys(data.message || {});
        setAnimales(list);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchAnimales();
  }, []);

  return { animales, loading, error };
}
