import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import LeaderCard from '../components/LeaderCard'
import { leadership } from '../data/leadership'

const imgStory = new URL('../assets/Where we start.png', import.meta.url).href
const imgValues = new URL('../assets/image.png', import.meta.url).href
const imgVision = new URL('../assets/hero.png', import.meta.url).href
const imgMission = new URL('../assets/project 58.jpeg', import.meta.url).href
const imgJourney = new URL('../assets/units/levite-protocol.jpg', import.meta.url).href

export default function About(){
  return (
    <main className="container page about-page">
      <SectionTitle title="About Us" subtitle="A welcoming community of faith" />

      <section className="about-split">
        <div className="media"><img src={imgStory} alt="Where we start" /></div>
        <div className="text">
          <h3>Where We Start</h3>
          <p className="lead">We started with a simple but powerful vision: to worship God, make disciples, and help people encounter the transforming love of Jesus in a real and practical way. From our beginning, this church has been shaped by prayer, faith, and a deep commitment to the Word of God.</p>
          <p>What began as a humble gathering has grown into a vibrant community where people find hope, belonging, and direction. We are a church that celebrates where God started us, while trusting Him for where He is taking us next.</p>
          <p>Today, we continue to build a place where families are strengthened, lives are renewed, and people are encouraged to grow in Christ, serve with purpose, and live with conviction. This is where we started, and this is where we are still moving forward together.</p>
        </div>
      </section>

      <section className="about-split reverse">
        <div className="media"><img src={imgValues} alt="Core values" /></div>
        <div className="text">
          <h3>Our Core Values</h3>
          <div className="about-values">
            <div className="value-card"><strong>Worship</strong><p>Seeking God's presence through excellence in praise and reverence.</p></div>
            <div className="value-card"><strong>Discipleship</strong><p>Intentional spiritual formation and growth for every believer.</p></div>
            <div className="value-card"><strong>Community</strong><p>Authentic relationships and compassionate care for one another.</p></div>
          </div>
        </div>
      </section>

      <section className="about-split">
        <div className="media"><img src={imgVision} alt="Our vision" /></div>
        <div className="text">
          <h3>Our Vision</h3>
          <p>To see lives transformed by the gospel and communities renewed through faithful service and compassionate outreach.</p>
        </div>
      </section>

      <section className="about-split reverse">
        <div className="media"><img src={imgMission} alt="Our mission" /></div>
        <div className="text">
          <h3>Our Mission</h3>
          <p>Love God, love people, and make disciples — equipping believers to serve and lead in their spheres.</p>
        </div>
      </section>

      <section className="about-split">
        <div className="media"><img src={imgJourney} alt="The journey" /></div>
        <div className="text">
          <h3>The Journey So Far</h3>
          <div className="timeline">
            <div className="milestone"><div className="dot"/> <div className="milestone-body"><strong>Beginning</strong><p>Foundational years and first gatherings (placeholder).</p></div></div>
            <div className="milestone"><div className="dot"/> <div className="milestone-body"><strong>Growth</strong><p>Growing community, new ministries, and outreach (placeholder).</p></div></div>
            <div className="milestone"><div className="dot"/> <div className="milestone-body"><strong>Milestones</strong><p>Major events and milestones that shaped our identity (placeholder).</p></div></div>
            <div className="milestone"><div className="dot"/> <div className="milestone-body"><strong>Today</strong><p>Where we are now and our focus for the future (placeholder).</p></div></div>
          </div>
        </div>
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
