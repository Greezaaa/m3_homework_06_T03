import './App.css';
import { useEffect, useState } from 'react';
import PokeTypes from './components/PokeTypes/PokeTypes';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  const APIUrl = 'https://pokeapi.co/api/v2/type'
  const [data, setData] = useState(undefined)
  const [link, setLink] = useState(undefined)
  const [pokes, setPokes] = useState([])
  const fetchData = () => {
    fetch(APIUrl).then(res => res.json())
      .then(res => {
        setData(res)
      })
  }
  const getPokesByType = (link) =>{
    if(link !== undefined) {
      fetch(link).
      then(res => res.json())
      .then(newData => {
        let times = 3
        while( times > 0) {
          let random = Math.floor(Math.random()*newData.names.length)
          times--
          setPokes([...pokes, newData.pokemon[random].pokemon.name])
          
          console.log(newData.pokemon[random].pokemon.name);
        }
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  // useEffect(() => {
  // }, [pokes])
  // useEffect(() => {
  // }, [data])
  useEffect(() => {
    getPokesByType(link)
  }, [link])

  return (
    <div className="App">
      {data !== undefined ? <PokeTypes data={data.results} setLink={setLink} /> : <></>}
      {link !== undefined ? <Pokemon pokes={pokes} /> : <></>}
    </div>
  );
}

export default App;
