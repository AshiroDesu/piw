// Arquivo único: ColaReact.jsx
import React, { useState, useEffect } from "react";

// Componente 1: props e renderização condicional
function Saudacao({ nome, isAdmin }) {
  return (
    <p style={{ color: isAdmin ? "red" : "black" }}>
      {isAdmin ? `Olá administrador ${nome}` : `Olá ${nome}`}
    </p>
  );
}

// Componente 2: contador com state
function Contador() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>Contador: {num}</h2>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </div>
  );
}

// Componente 3: lista com map e filtro
function ListaFiltrada() {
  const [busca, setBusca] = useState("");
  const cores = ["vermelho", "azul", "verde", "amarelo"];
  const filtradas = cores.filter((cor) =>
    cor.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar cor..."
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {filtradas.map((cor, i) => (
          <li key={i}>{cor}</li>
        ))}
      </ul>
    </div>
  );
}

// Componente 4: fetch com useEffect
function ListaPersonagens() {
  const [personagens, setPersonagens] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) return setPersonagens([]);
          throw new Error("Erro ao buscar dados");
        }
        return res.json();
      })
      .then((data) => setPersonagens(data.results || []))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div>
      <h2>Personagens Rick and Morty</h2>
      <input
        type="text"
        placeholder="Buscar por nome..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {personagens.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <img src={p.image} alt={p.name} width="100" />
            <h3>{p.name}</h3>
            <p>{p.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// App final para revisão
export default function ColaReact() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Cola React</h1>
      <Saudacao nome="Maria" isAdmin={true} />
      <Contador />
      <ListaFiltrada />
      <ListaPersonagens />
    </div>
  );
}
