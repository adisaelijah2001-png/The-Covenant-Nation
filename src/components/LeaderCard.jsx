import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function LeaderCard({ person, featured }){
  return (
    <div className={`leader-card ${featured ? 'featured' : ''}`}>
      <img src={person.image} alt={person.name} />
      <div className="leader-body">
        <h4>{person.name}</h4>
        <p className="role muted">{person.role}</p>
        <p className="bio">{person.bio}</p>

        <div style={{marginTop:8,display:'flex',gap:8}}>
          {person.social && person.social.instagram && (
            <a href={person.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          )}
          {person.social && person.social.linkedin && (
            <a href={person.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          )}
        </div>
      </div>
    </div>
  )
}
