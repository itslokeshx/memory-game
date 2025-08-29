import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  let [ shuffledPokemon, setShuffledPokemon]=useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")
      .then((res) => res.json())
      .then((data) => {

        const promises = data.results.map((p) =>
          fetch(p.url)
            .then((res) => res.json())
            .then((details) => {
              return {
                name: details.name,
                image: details.sprites.front_default,
              };
            })
        );

        Promise.all(promises).then((results) => {
          setPokemon(results);
        });
      });
  }, [pokemon]);

  function shufflePokemon(){
     let x =pokemon
     for( let i=x.length -1; i>0;i--)
     {
        let random = Math.floor(Math.random() * (i+1));

        [x[i],x[random]] = [x[random], x[i]]
         
     }
       setShuffledPokemon( shuffledPokemon= pokemon)
    
   
  }

  

  return (
    <div>
        <div className="pokemonsGrid">
      {shuffledPokemon.map((p) => (
        <div className="pokemons" key={p.name}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
</div>
      <button onClick={shufflePokemon} >Shuffle!</button>
    </div>
  );
}


