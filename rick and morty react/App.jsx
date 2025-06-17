import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [personagens, setpersonagens] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  const fetchPersonagens = async () => {
    const api_url = `https://rickandmortyapi.com/api/character/?name=${pesquisa}`;

    try {
      const dados = await fetch(api_url);
      // console.log(dados)

      if (dados.status === 404) {
        setpersonagens([]);
        return;
      }

      const dadosJson = await dados.json();
      setpersonagens(dadosJson.results || []);

      console.log(personagens);


    } catch (error) {
      alert("Não consegui puxar os dados");
    }


  }

  useEffect(() => {
    fetchPersonagens();
  }, [pesquisa])


  return (
    <>
      <h1>Lista de Personagens</h1>
      <input value={pesquisa} onChange={e => setPesquisa(e.target.value)} type='text' placeholder='Nome do personagem' />
      <div className='personagens-container'>
        {personagens.map(personagem => {
          return <div>
            <img src={personagem.image}/>
            <p>{personagem.name}</p>
            </div>
        })}
      </div>
    </>
  )
}

export default App
