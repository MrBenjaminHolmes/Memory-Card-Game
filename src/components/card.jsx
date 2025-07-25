export default function Card({ imgSrc }) {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc.image} />
      <h3 className="card-name">{imgSrc.name}</h3>
    </div>
  );
}
