import spongebob from "../assets/background.jpg";
import "../styles/Background.css";

export default function TvScreen() {
  return (
    <div className="tv-container">
      <div
        className="tv-background"
        style={{ backgroundImage: `url(${spongebob})` }}
      />
    </div>
  );
}
