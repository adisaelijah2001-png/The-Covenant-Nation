export default function UnitCard({unit}){
  return (
    <article className="unit-card card">
      <div className="unit-image-wrap">
        <img src={unit.image} alt={unit.name} />
      </div>
      <div className="unit-body">
        <h4>{unit.name}</h4>
        <div className="accent-line" />
        <p>{unit.description}</p>
        <a className="btn" href="#">Learn More</a>
      </div>
    </article>
  )
}
