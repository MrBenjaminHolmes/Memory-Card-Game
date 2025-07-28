import "../styles/Card.css";
import "../styles/App.css";
import TvScreen from "./TvScreen";
import images from "./images";
import CardContainer from "./cardContainer";
import Score from "./Score";
import { useState } from "react";
import Difficulty from "./difficulty";

function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function App() {
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(7);
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
        <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
        <CardContainer cards={shuffledArray} handleClick={handleCardClick} />
      </div>
    </>
  );
}

export default App;
