import { useEffect, useState } from "react";
export default function MemoryCard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selectedcards, setselectedcard] = useState([]);
  const [shuffledPokemon, setShuffledPokemon] = useState([]);
  const [allCards, setallCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12&offset=24",
        );
        const data = await response.json();
        const promises = data.results.map((p) =>
          fetch(p.url)
            .then((res) => res.json())
            .then((details) => ({
              name: details.name,
              image: details.sprites.front_default,
            })),
        );
        const results = await Promise.all(promises);
        setallCards(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div>
      {allCards.map((card) => (
        <div key={card.name}>
          <img src={card.image} />
          <p> {card.name}</p>
        </div>
      ))}
    </div>
  );
}
