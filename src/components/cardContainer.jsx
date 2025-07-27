//cardContainer.jsx
import Card from "./card";

export default function CardContainer({ cards, handleClick }) {
  return (
    <div id="center-wrapper">
      <div id="card-container">
        {cards.map((src, index) => (
          <Card key={index} imgSrc={src} onClick={() => handleClick(src)} />
        ))}
      </div>
    </div>
  );
}
