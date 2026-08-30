import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceLocationSection from '../components/ServiceLocationSection'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import { sermons, sortSermonsByNewest } from '../data/sermons'
import { events } from '../data/events'
import { leadership } from '../data/leadership'
import LeaderCard from '../components/LeaderCard'
import { units } from '../data/units'
import UnitCard from '../components/UnitCard'
import SermonCard from '../components/SermonCard'
import EventCard from '../components/EventCard'

export default function Home(){
  const latestMessages = sortSermonsByNewest(sermons).slice(0, 6)

  return (
    <main>
      <Hero />

      <section className="container intro">
        <ScrollReveal>
          <SectionTitle title="Welcome" subtitle="A warm welcome to our church" />
        </ScrollReveal>
        <ScrollReveal className="text-center">
          <p className="lead">The Covenant Nation, Jesutedo is a community where people can worship God, grow spiritually, connect with others, and serve. We welcome all who are seeking God.</p>
        </ScrollReveal>
      </section>

      <ServiceLocationSection />

      <section className="container discipleship">
        <ScrollReveal>
          <SectionTitle title="Grow Deeper in Your Faith" />
        </ScrollReveal>
        <ScrollReveal className="text-center">
          <p>Discipleship provides an opportunity for members and visitors to learn, grow spiritually, ask questions, and build stronger relationships. <strong>Every Tuesday</strong>.</p>
        </ScrollReveal>
        <ScrollReveal className="text-center">
          <a className="btn primary" href="/discipleship">Learn About Discipleship</a>
        </ScrollReveal>
      </section>

      <section className="container leadership">
        <ScrollReveal>
          <SectionTitle title="Leadership" subtitle="Meet our leaders" />
        </ScrollReveal>
        <div className="leader-grid">
          {leadership.map((p, i) => (
            <ScrollReveal key={p.id} direction={i === 0 ? 'up' : 'up'} delay={i * 80}>
              <LeaderCard person={p} featured={i===0} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container units-preview">
        <ScrollReveal>
          <SectionTitle title="Our Church Units" subtitle="Ministry units and teams" />
        </ScrollReveal>
        <div className="grid cols-4">
          {units.slice(0,6).map((u, index) => (
            <ScrollReveal key={u.id} delay={index * 60}>
              <UnitCard unit={u} />
            </ScrollReveal>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:'1rem'}}>
          <a className="btn" href="/units">View All Units</a>
        </div>
      </section>

      <section className="container sermons">
        <ScrollReveal>
          <SectionTitle title="Latest Messages" subtitle="Watch and listen to recent messages from The Covenant Nation." />
        </ScrollReveal>
        <div className="sermon-grid sermon-grid-home">
          {latestMessages.map((s, index) => (
            <ScrollReveal key={s.id} delay={index * 80}>
              <SermonCard sermon={s} />
            </ScrollReveal>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:'1.5rem'}}>
          <a className="btn sermon-view-all" href="/sermons">View All Messages →</a>
        </div>
      </section>

      <section className="container events">
        <ScrollReveal>
          <SectionTitle title="Upcoming Events" subtitle="Join our community events" />
        </ScrollReveal>
        <div className="grid cols-2">
          {events.map((ev, index) => (
            <ScrollReveal key={ev.id} delay={index * 70}>
              <EventCard event={ev} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
