export default function Difficulty({ difficulty, changeFunction }) {
  return (
    <div id="diffMenu">
      <h2>Select a Difficulty</h2>
      <label htmlFor="slider" className="block text-lg font-medium mb-2">
        Difficulty Level: {difficulty}
      </label>
      <input
        id="slider"
        type="range"
        min="1"
        max="14"
        step="1"
        value={difficulty}
        onChange={(e) => changeFunction(Number(e.target.value))}
        className="slider"
      />
    </div>
  );
}
