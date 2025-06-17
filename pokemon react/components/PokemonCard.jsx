function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
}

export default PokemonCard;
