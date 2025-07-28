export default function Difficulty({ difficulty, setDifficulty }) {
  return (
    <div className="diffMenu">
      <h2>Select a Difficulty</h2>
      <label htmlFor="slider" className="block text-lg font-medium mb-2">
        Difficulty Level: {difficulty}
      </label>
      <input
        id="slider"
        type="range"
        min="0"
        max="14"
        step="1"
        value={difficulty}
        onChange={(e) => setDifficulty(Number(e.target.value))}
        className="slider"
      />
    </div>
  );
}
