import {useEffect, useState} from "react";
import Display from "./components/displayPokemon/Display";
import Search from "./components/Searchbox/Search"
import './App.css'


function App() {
  // const[suggestedNames,setSuggestedNames]=useState([]);
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
 
  //  const handleInputChange=(inputText)=>{
  //   //name(inputText);
  //   setSuggestedNames:inputText ? name(inputText) : [];
  //   };
  return (

    <div className="App">
      <h1 className="heading">Pokedex</h1>
      <Search  />
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

      </div>
    </div>
  );
}

export default App;
