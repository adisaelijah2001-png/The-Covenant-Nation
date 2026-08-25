import { useParams, Link } from 'react-router-dom'
import { units } from '../data/units'
import SectionTitle from '../components/SectionTitle'

function Section({title, children}){
  return (
    <section style={{margin:'1.5rem 0'}}>
      <h3 style={{color:'var(--primary)'}}>{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default function UnitDetail(){
  const { id } = useParams()
  const unit = units.find(u => String(u.id) === String(id))
  if(!unit) return (
    <main className="container">
      <SectionTitle title="Unit not found" />
      <p>We couldn't find that unit. <Link to="/units">Back to units</Link></p>
    </main>
  )

  return (
    <main>
      <section className="hero hero-full" style={{backgroundImage:`url('${unit.image}')`, minHeight:'60vh'}}>
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>{unit.name}</h1>
            <p className="lead">{unit.description}</p>
          </div>
        </div>
      </section>

      <main className="container" style={{padding:'2rem 0'}}>
        <SectionTitle title={unit.name} subtitle={unit.description} />

        <Section title="About the Unit">
          <p>{unit.longDescription || 'Editable overview for this unit. Replace with your church-specific content.'}</p>
        </Section>

        <Section title="Our Purpose">
          <p>{unit.purpose || 'Purpose description goes here.'}</p>
        </Section>

        <Section title="Our Mission">
          <p>{unit.mission || 'Mission description goes here.'}</p>
        </Section>

        <Section title="Responsibilities & Activities">
          <p>{unit.activities || 'List key responsibilities and activities here.'}</p>
        </Section>

        <Section title="Who Can Join">
          <p>{unit.who || 'Describe who the unit is suitable for.'}</p>
        </Section>

        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <Link to="/units/join" className="btn primary">Join This Unit</Link>
        </div>
      </main>
    </main>
  )
}
