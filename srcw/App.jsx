import './App.css';
import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  const [contador, setContador] = useState(0);

  async function buscarPokemon(numero) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    const data = await res.json();
    setPokemon({
      nome: data.name,
      imagem: data.sprites.other['official-artwork'].front_default,
    });
  }

  useEffect(() => {
    buscarPokemon(1);
  }, []);

  function mudarCorFundo() {
    const appDiv = document.getElementById('app-container');
    appDiv.style.backgroundColor = '#d0f0ff';
  }

  return (
    <>
      <div id="app-container" className="App">
        <h1>Exemplo Completo React</h1>
        <button onClick={() => setContador(contador + 1)}>
          Contador: {contador}
        </button>
        <button onClick={mudarCorFundo}>Mudar Cor com DOM</button>
        <button onClick={() => buscarPokemon(Math.floor(Math.random() * 151) + 1)}>
          Buscar Pokémon Aleatório
        </button>

        {pokemon && <PokemonCard nome={pokemon.nome} imagem={pokemon.imagem} />}
      </div>
    </>
  );
}
