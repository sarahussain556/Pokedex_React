import {useEffect, useState} from "react";


function App() {
  const[getPokemons,setPokemons] = useState('https://pokeapi.co/api/v2/pokemon/')
   //const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

   const getres = async () => {
    const result = await fetch(getPokemons)
    const data = await result.json()
    console.log(data);
   }
   useEffect(()=>{
    getres();
   },[])
 
  return (

    <div className="App">
     
    </div>
  );
}

export default App;
