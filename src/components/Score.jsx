function Score({ score, highScore }) {
  return (
    <div className="scoreDiv">
      <p>Score:{score}</p>
      <p>Highscore: {highScore}</p>
    </div>
  );
}
export default Score;
