import { useState } from 'react';
import './App.css'

export default function App() {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState();

  const url = "https://rickandmortyapi.com/api/character";


  async function search() {
    setLoading(true);
    const res = await fetch(url).then(res => res.json().finally(setLoading(false)));
    setCharacters(res.results);

  }

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <button onClick={search}>Buscar personajes</button>
      {loading && <div>Cargando...</div>}
      <ul>

        {characters?.map(per => {
          return <li key={per.id}>{per.name}</li>
        })}
      </ul>

    </div>
  )
}

