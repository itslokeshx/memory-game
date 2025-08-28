import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        // step 1: map over the results and fetch each detail
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

        // step 2: wait for all fetches to finish
        Promise.all(promises).then((results) => {
          setPokemon(results);
        });
      });
  }, []);

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.name}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
}
