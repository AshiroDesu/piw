// Arquivo: App.jsx
import React, { useState, useEffect } from 'react';
import Saudacao from './components/Saudacao';
import MeuBotao from './components/MeuBotao';
import Contador from './components/Contador';
import ListaCores from './components/ListaCores';

function App() {
  const [nome, setNome] = useState('Visitante');
  const cores = ['Azul', 'Verde', 'Vermelho'];

  useEffect(() => {
    console.log(`Bem-vindo(a), ${nome}`);
  }, [nome]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Básico para Prova</h1>

      <Saudacao nome={nome} />
      <button onClick={() => setNome('João')}>Mudar Nome</button>

      <hr />

      <h2>Componente com Props</h2>
      <MeuBotao texto="Clique aqui!" />

      <hr />

      <h2>Contador com useState</h2>
      <Contador />

      <hr />

      <h2>Listando Cores com map</h2>
      <ListaCores cores={cores} />
    </div>
  );
}

export default App;

// Arquivo: components/Saudacao.jsx
function Saudacao({ nome }) {
  return <h2>Olá, {nome}!</h2>;
}

export default Saudacao;

// Arquivo: components/MeuBotao.jsx
function MeuBotao({ texto }) {
  const handleClick = () => alert('Você clicou!');
  return <button onClick={handleClick}>{texto}</button>;
}

export default MeuBotao;

// Arquivo: components/Contador.jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

export default Contador;

// Arquivo: components/ListaCores.jsx
function ListaCores({ cores }) {
  return (
    <ul>
      {cores.map((cor, i) => (
        <li key={i}>{cor}</li>
      ))}
    </ul>
  );
}

export default ListaCores;
