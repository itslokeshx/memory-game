import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [shuffle, setShuffle] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${shuffle}`)
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
  }, [shuffle]);
function Increment(){
  setShuffle(shuffle=> shuffle+1)
}

  return (
    <div>
        <div className="pokemonsGrid">
      {pokemon.map((p) => (
        <div className="pokemons" key={p.name}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
</div>
      <button onClick={Increment} >change! {shuffle}</button>
    </div>
  );
}


