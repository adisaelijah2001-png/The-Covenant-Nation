export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>The Covenant Nation, Jesutedo</h4>
          <p>In front of Lagos Business School, Sangotedo, Lagos State, Nigeria</p>
        </div>

        <div>
          <h5>Service Times</h5>
          <p>Sunday — 7:30 AM &amp; 10:00 AM</p>
          <p>Discipleship — Every Tuesday</p>
        </div>

        <div>
          <h5>Connect</h5>
          <p>Social placeholders</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} The Covenant Nation, Jesutedo — All rights reserved.</small>
      </div>
    </footer>
  )
}
