export default function Card({ imgSrc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-img" src={imgSrc.image} />
      <h3 className="card-name">{imgSrc.name}</h3>
    </div>
  );
}
