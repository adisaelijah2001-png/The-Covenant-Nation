import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceLocationSection from '../components/ServiceLocationSection'
import CTASection from '../components/CTASection'
import { sermons } from '../data/sermons'
import { events } from '../data/events'
import { leadership } from '../data/leadership'
import LeaderCard from '../components/LeaderCard'
import { units } from '../data/units'
import UnitCard from '../components/UnitCard'
import SermonCard from '../components/SermonCard'
import EventCard from '../components/EventCard'

export default function Home(){
  return (
    <main>
      <Hero />

      <section className="container intro">
        <SectionTitle title="Welcome" subtitle="A warm welcome to our church" />
        <p className="lead">The Covenant Nation, Jesutedo is a community where people can worship God, grow spiritually, connect with others, and serve. We welcome all who are seeking God.</p>
      </section>

      <ServiceLocationSection />

      <section className="container discipleship">
        <SectionTitle title="Grow Deeper in Your Faith" />
        <p>Discipleship provides an opportunity for members and visitors to learn, grow spiritually, ask questions, and build stronger relationships. <strong>Every Tuesday</strong>.</p>
        <a className="btn primary" href="/discipleship">Learn About Discipleship</a>
      </section>

      <section className="container leadership">
        <SectionTitle title="Leadership" subtitle="Meet our leaders" />
        <div className="leader-grid">
          {leadership.map((p, i) => <LeaderCard key={p.id} person={p} featured={i===0} />)}
        </div>
      </section>

      <section className="container units-preview">
        <SectionTitle title="Our Church Units" subtitle="Ministry units and teams" />
        <div className="grid cols-4">
          {units.slice(0,6).map(u => <UnitCard key={u.id} unit={u} />)}
        </div>
        <div style={{textAlign:'center', marginTop:'1rem'}}>
          <a className="btn" href="/units">View All Units</a>
        </div>
      </section>

      <section className="container sermons">
        <SectionTitle title="Recent Sermons" subtitle="Watch or listen to recent messages" />
        <div className="grid cols-3">
          {sermons.map(s => <SermonCard key={s.id} sermon={s} />)}
        </div>
      </section>

      <section className="container events">
        <SectionTitle title="Upcoming Events" subtitle="Join our community events" />
        <div className="grid cols-2">
          {events.map(ev => <EventCard key={ev.id} event={ev} />)}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
