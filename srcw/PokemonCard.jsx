import './PokemonCard.css';

export function PokemonCard({ nome, imagem }) {
  return (
    <div className="card">
      <h2>{nome.toUpperCase()}</h2>
      <img src={imagem} alt={nome} />
    </div>
  );
}
