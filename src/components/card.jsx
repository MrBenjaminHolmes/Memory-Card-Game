export default function Card({ imgSrc }) {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc} />
      <h3 className="card-name">Spongebob</h3>
    </div>
  );
}
