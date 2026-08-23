// Hero uses the congregation worship image at src/assets/church/worship-hero.jpg
// Replace that file with your real worship photo when ready.
const heroImage = new URL('../assets/church/worship-hero.jpg', import.meta.url).href

export default function Hero(){
  return (
    <section
      className="hero hero-full"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="hero-overlay">
        <div className="container hero-content fade-in">
          <h1>Welcome to The Covenant Nation, Jesutedo</h1>
          <p className="lead">A place to worship, grow, connect, and discover God's purpose for your life.</p>
          <p className="muted small">In front of Lagos Business School, Sangotedo, Lagos State, Nigeria</p>
          <div className="hero-actions">
            <a href="/plan-visit" className="btn primary">Plan Your Visit</a>
            <a href="/about" className="btn secondary">Explore Our Church</a>
          </div>
        </div>
      </div>
    </section>
  )
}
