import {useEffect, useState} from "react";
import Display from "./components/displayPokemon/Display";


function App() {
  const[getPokemons,setPokemons] = useState([])
  const [showPokemons, setShowPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

   const getres = async () => {
    const result = await fetch(showPokemons)
    const data = await result.json()
    console.log(data);
    setShowPokemons(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setPokemons( currentList => [...currentList, data])
        await getPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)

   }
   useEffect(()=>{
    getres();
   },[])
 
  return (

    <div className="App">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {getPokemons.map( (pokemonStats, index) => 
            <Display
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
          {/* <button className="load-more" onClick={() => getAllPokemons()}>Load more</button> */}
      </div>
    </div>
  );
}

export default App;
