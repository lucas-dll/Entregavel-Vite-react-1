export default function Card({ numero }) {
  return (
    <article className="card" aria-label={`Cartão ${numero}`}>
      <span className="card-number">{numero}</span>
    </article>
  );
}
