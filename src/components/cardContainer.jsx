import images from "./images";
import Card from "./card";
import { shuffle, gameLogic } from "./gameLogic.js";
import { useState } from "react";

export default function CardContainer() {
  const [shuffledArray, setShuffle] = useState(images);

  function handleClick(card) {
    gameLogic(card);
    setShuffle(shuffle([...images])); //
  }

  return (
    <div id="center-wrapper">
      <div id="card-container">
        {shuffledArray.map((src, index) => (
          <Card key={index} imgSrc={src} onClick={() => handleClick(src)} />
        ))}
      </div>
    </div>
  );
}
