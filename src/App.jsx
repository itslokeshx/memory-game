import { useEffect, useState } from "react";
import "./style.css";

export default function MemoryCard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selectedcards, setselectedcard] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(8); // 8 = Easy, 12 = Medium, 16 = Hard
  let [shuffledPokemon, setShuffledPokemon] = useState([]);
  const [allCards, setallCards] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let isActive = true;
    const fetchCards = async () => {
      setIsAnimating(true); // Start fade-out

      // Fetch cards safely
      const fetchPromise = fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${difficulty}&offset=24`,
      )
        .then((res) => res.json())
        .then((data) =>
          Promise.all(
            data.results.map((p) =>
              fetch(p.url)
                .then((res) => res.json())
                .then((details) => ({
                  name: details.name,
                  image: details.sprites.front_default,
                })),
            ),
          ),
        );

      // Force the system to wait *at least* 400ms for the CSS fade-out animation to finish shrinking/hiding the grids
      const animationDelay = new Promise((resolve) => setTimeout(resolve, 400));

      try {
        const [results] = await Promise.all([fetchPromise, animationDelay]);
        if (isActive) {
          setallCards(results); // Mount new cards invisibly
          // Allow DOM to register the new dimensions before firing fade-in
          setTimeout(() => {
            if (isActive) setIsAnimating(false);
          }, 50);
        }
      } catch (error) {
        console.log(error);
        if (isActive) setIsAnimating(false);
      }
    };

    fetchCards();
    // Reset game completely when difficulty changes
    setselectedcard([]);
    setCurrentScore(0);
    setIsGameOver(false);

    return () => {
      isActive = false;
    };
  }, [difficulty]);

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
      setIsGameOver(true);
      setHighscore((prev) => (currentScore > prev ? currentScore : prev));
    } else {
      setselectedcard((prev) => [...prev, card.name]);
      setCurrentScore((prev) => prev + 1);
      setallCards(shuffle(allCards));
    }
  }

  function resetGame() {
    setselectedcard([]);
    setCurrentScore(0);
    setIsGameOver(false);
    setallCards(shuffle(allCards));
  }

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>Memory Game</h1>
        <div className="difficulty-controls">
          <button
            className={`diff-btn ${difficulty === 8 ? "active" : ""}`}
            onClick={() => {
              if (difficulty !== 8) setDifficulty(8);
            }}
          >
            Easy
          </button>
          <button
            className={`diff-btn ${difficulty === 12 ? "active" : ""}`}
            onClick={() => {
              if (difficulty !== 12) setDifficulty(12);
            }}
          >
            Medium
          </button>
          <button
            className={`diff-btn ${difficulty === 16 ? "active" : ""}`}
            onClick={() => {
              if (difficulty !== 16) setDifficulty(16);
            }}
          >
            Hard
          </button>
        </div>
        <div className="scoreboard">
          <div className="score">
            Score <span>{currentScore}</span>
          </div>
          <div className="score-divider" />
          <div className="score">
            Best <span>{highScore}</span>
          </div>
        </div>
      </header>

      <main
        className={`cards-grid grid-${difficulty} ${isAnimating ? "grid-fade-out" : "grid-fade-in"}`}
      >
        {allCards.map((card, idx) => (
          <div
            key={card.name}
            className="card"
            style={{ animationDelay: `${idx * 0.04}s` }}
            onClick={() => handleClick(card)}
          >
            <img src={card.image} alt={card.name} />
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </main>

      {isGameOver && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Game Over</h2>
            <p>You clicked the same Pokémon twice.</p>
            <div className="modal-stats">
              <div className="modal-stat">
                <span className="modal-stat-label">Score</span>
                <span className="modal-stat-value">{currentScore}</span>
              </div>
              <div className="modal-stat">
                <span className="modal-stat-label">Best</span>
                <span className="modal-stat-value">{highScore}</span>
              </div>
            </div>
            <button className="restart-btn" onClick={resetGame}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
