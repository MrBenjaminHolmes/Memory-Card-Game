import "../styles/Card.css";
import "../styles/App.css";
import TvScreen from "./TvScreen";
import CardContainer from "./cardContainer";

function App() {
  return (
    <>
      <TvScreen />
      <div id="MainContainer">
        <h1>Spongebob Memory Game</h1>
        <CardContainer />
      </div>
    </>
  );
}

export default App;
