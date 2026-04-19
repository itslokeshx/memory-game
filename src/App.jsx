import { useEffect, useState } from "react";
import "./style.css";

export default function MemoryCard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selectedcards, setselectedcard] = useState([]);
  let [shuffledPokemon, setShuffledPokemon] = useState([]);
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
  function shuffle(array) {
    shuffledPokemon = [...array];
    for (let i = shuffledPokemon.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      [shuffledPokemon[i], shuffledPokemon[random]] = [
        shuffledPokemon[random],
        shuffledPokemon[i],
      ];
    }
    return shuffledPokemon;
  }
  function handleClick(card) {
    if (selectedcards.includes(card.name)) {
      alert("you lost!");
      setselectedcard([]);
      setCurrentScore(0);
      setHighscore((prev) => (currentScore > prev ? currentScore : prev));
    } else {
      setselectedcard((prev) => [...prev, card.name]);
      setCurrentScore((prev) => prev + 1);

      setallCards(shuffle(allCards));
    }
  }
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
          <div
            key={card.name}
            className="card"
            onClick={() => handleClick(card)}
          >
            <img src={card.image} alt={card.name} />
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
