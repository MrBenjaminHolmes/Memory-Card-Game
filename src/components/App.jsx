import "../styles/App.css";
import TvScreen from "./TvScreen";
import Card from "./card";

function App() {
  return (
    <>
      <TvScreen />
      <div className="card-wrapper">
        <Card />
      </div>
    </>
  );
}

export default App;
