import SectionTitle from '../components/SectionTitle'
import UnitCard from '../components/UnitCard'
import { units } from '../data/units'

const heroImg = new URL('../assets/main.png', import.meta.url).href

export default function Units(){
  return (
    <main>
      <section className="hero hero-full" style={{backgroundImage:`url('${heroImg}')`, minHeight:'90vh'}}> 
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Serve. Connect. Grow.</h1>
            <p className="lead">Discover a place to serve, build meaningful relationships, and use your gifts to make a difference.</p>
          </div>
        </div>
      </section>

      <section className="container page units-page">
        <SectionTitle title="Church Units" subtitle="Explore our ministry units" />
        <div className="grid cols-3">
          {units.map(u => <UnitCard key={u.id} unit={u} />)}
        </div>
      </section>
    </main>
  )
}
