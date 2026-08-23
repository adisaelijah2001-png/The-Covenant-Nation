export default function LeaderCard({ person, featured }){
  return (
    <div className={`leader-card ${featured ? 'featured' : ''}`}>
      <img src={person.image} alt={person.name} />
      <div className="leader-body">
        <h4>{person.name}</h4>
        <p className="role muted">{person.role}</p>
        <p className="bio">{person.bio}</p>
      </div>
    </div>
  )
}
