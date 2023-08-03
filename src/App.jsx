
import { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=10'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemonList(data.results);
        setTimeout(() => setShowLoading(false), 3000); // 3 segundos de delay
      } catch (error) {
        console.error('Error fetching data:', error);
        setShowLoading(false);
      }
    };

    fetchPokemones();
  }, []);

  return (
    <div>
      {showLoading ? (
        <h1>Esperando...</h1>
      ) : (
        <div>
          <ul>
            {pokemonList.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;