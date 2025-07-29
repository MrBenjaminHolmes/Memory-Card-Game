import "../styles/Card.css";
import "../styles/App.css";
import TvScreen from "./TvScreen";
import imageData from "./images";
import CardContainer from "./cardContainer";
import Score from "./Score";
import { useEffect, useState } from "react";
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
  const [difficulty, setDifficulty] = useState(8);
  const [clickedList, setClickedList] = useState([]);
  const [filteredImages, setFilteredImages] = useState(shuffle([...imageData]));
  const [highScore, setHighScore] = useState(score);

  function onDifficultyChange(diff) {
    setScore(0);
    setDifficulty(diff);

    let newImages = [...imageData];

    const itemsToRemove = newImages.length - diff;

    for (let i = 0; i < itemsToRemove; i++) {
      const randomIndex = Math.floor(Math.random() * newImages.length);
      newImages.splice(randomIndex, 1);
    }

    setClickedList([]);
    setFilteredImages(shuffle(newImages));
  }

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
    setFilteredImages(shuffle([...filteredImages]));
  }
  useEffect(() => {
    onDifficultyChange(difficulty);
  }, []);

  return (
    <>
      <TvScreen />
      <div id="MainContainer">
        <div className="info">
          <div class="left-group">
            <h1>Spongebob Memory Game</h1>

            <Difficulty
              difficulty={difficulty}
              changeFunction={onDifficultyChange}
            />
          </div>

          <Score score={score} highScore={highScore} />
        </div>

        <CardContainer cards={filteredImages} handleClick={handleCardClick} />
      </div>
    </>
  );
}

export default App;
