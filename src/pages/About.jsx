import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import LeaderCard from '../components/LeaderCard'
import { leadership } from '../data/leadership'

export default function About(){
  return (
    <main className="container page about-page">
      <SectionTitle title="About Us" subtitle="A welcoming community of faith" />

      <section>
        <h3>Our Story</h3>
        <p className="lead">The Covenant Nation, Jesutedo is a community where people can worship God, grow spiritually, connect with others, and serve. This section contains editable placeholder copy — replace with your church history and story.</p>
      </section>

      <section>
        <h3>Our Core Values</h3>
        <ul>
          <li>Worship — pursuing a lifestyle of reverence and praise.</li>
          <li>Discipleship — intentional spiritual growth and formation.</li>
          <li>Community — deep, supportive relationships.</li>
          <li>Service — using gifts to bless others and the city.</li>
        </ul>
      </section>

      <section>
        <h3>Our Vision</h3>
        <p>To see lives transformed by the gospel and communities renewed through faithful service and compassionate outreach.</p>
      </section>

      <section>
        <h3>Our Mission</h3>
        <p>Love God, love people, and make disciples — equipping believers to serve and lead in their spheres.</p>
      </section>

      <section>
        <h3>The Journey So Far</h3>
        <p>Beginning → Growth → Milestones → Today. This timeline is a placeholder — replace with specific milestones and dates to tell your church's story.</p>
      </section>

      <section style={{marginTop:20}}>
        <SectionTitle title="Pastors & Leadership" />
        <div className="leader-grid">
          {leadership.map((p,i) => <LeaderCard key={p.id} person={p} featured={i===0} />)}
        </div>
      </section>

      <div style={{marginTop:20}}>
        <a className="btn primary" href="/plan-visit">Attend a Service</a>
      </div>

      <CTASection />
    </main>
  )
}
