import { useEffect, useState } from "react";
import "./style.css";

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
    <div className="game-container">
      <header className="game-header">
        <h1>Pokemon Memory Game</h1>
        <div className="scoreboard">
          <div className="score">
            Score: <span>{currentScore}</span>
          </div>
          <div className="score">
            High Score: <span>{highScore}</span>
          </div>
        </div>
      </header>

      <main className="cards-grid">
        {allCards.map((card) => (
          <div key={card.name} className="card">
            <img src={card.image} alt={card.name} />
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
