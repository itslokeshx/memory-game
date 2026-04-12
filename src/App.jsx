import { useEffect, useState } from "react";
export default function MemoryCard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [selectedcards, setselectedcard] = useState([]);
  const [allCards, setallCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12&offset=24",
        );
        const data = await response.json();
        fetchCards(allCards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, [currentScore]);

  return (
    <div>
      {allCards.map((card) => (
        <div>{card.name}</div>
      ))}
    </div>
  );
}
