import "../styles/Card.css";
import "../styles/App.css";
import TvScreen from "./TvScreen";
import images from "./images";
import CardContainer from "./cardContainer";
import Score from "./Score";
import { shuffle } from "./gameLogic";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  const [shuffledArray, setShuffledArray] = useState(shuffle([...images]));
  const [highScore, setHighScore] = useState(score);
  function handleCardClick(card) {
    if (clickedList.includes(card)) {
      setScore(0);
      setClickedList([]);
    } else {
      const newScore = score + 1;
      if (newScore >= highScore) {
        setHighScore(newScore);
      }
      setScore(newScore);

      setClickedList((prev) => [...prev, card]);
    }
    setShuffledArray(shuffle([...images]));
  }

  return (
    <>
      <TvScreen />
      <div id="MainContainer">
        <div className="info">
          <h1>Spongebob Memory Game</h1>
          <Score score={score} highScore={highScore} />
        </div>

        <CardContainer cards={shuffledArray} handleClick={handleCardClick} />
      </div>
    </>
  );
}

export default App;
