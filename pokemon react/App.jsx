import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const data = await res.json();

        const detalhes = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return await res.json();
          })
        );

        setPokemons(detalhes);
      } catch (err) {
        console.error("Erro ao buscar pokémons:", err);
      }
    };

    fetchPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((p) =>
    p.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokédex React</h1>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="grid">
        {pokemonsFiltrados.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;
