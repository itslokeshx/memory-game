import { useEffect, useState } from "react";
export default function MemoryCard() {
  const [currentScore, setCurrentScore] = useState();
  const [highScore, setHighscore] = useState();
  const [selectedcards, setselectedcard] = useState([]);
  const [allCards, setallCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12&offset=24",
        );
        const data = await response.json();
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, [currentScore]);
  return <div></div>;
}
