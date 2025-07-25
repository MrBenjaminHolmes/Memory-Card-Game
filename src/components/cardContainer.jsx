import images from "./images";
import Card from "./card";

export default function CardContainer() {
  return (
    <div id="card-container">
      {images.map((src, index) => (
        <Card key={index} imgSrc={src} />
      ))}
    </div>
  );
}
