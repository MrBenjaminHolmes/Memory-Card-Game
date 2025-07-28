export default function Card({ imgSrc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={imgSrc.image} alt={imgSrc.name} />
      </div>
      <h3 className="card-name">{imgSrc.name}</h3>
    </div>
  );
}
