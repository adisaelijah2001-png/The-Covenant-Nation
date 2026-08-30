import { FiClock, FiMapPin, FiCalendar } from 'react-icons/fi'

function Card({children}){
  return <div className="card two-card">{children}</div>
}

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=The+Covenant+Nation+Jesutedo,+in+front+of+Lagos+Business+School,+Sangotedo,+Lagos+State,+Nigeria'

export default function ServiceLocationSection(){
  return (
    <section className="container service-location-section">
      <div className="two-cards-grid">
        <Card>
          <h3>Sunday Services</h3>
          <div className="service-times">
            <div className="time-row"><FiClock /> <div><strong>First Service</strong><div className="when">7:30 AM</div></div></div>
            <hr />
            <div className="time-row"><FiClock /> <div><strong>Second Service</strong><div className="when">10:00 AM</div></div></div>
            <hr />
            <div className="time-row"><FiCalendar /> <div><strong>Discipleship</strong><div className="when">Every Tuesday</div></div></div>
          </div>
        </Card>

        <Card>
          <h3>Our Location</h3>
          <div className="location-block">
            <div className="loc-line"><FiMapPin /> <div>The Covenant Nation, Jesutedo</div></div>
            <div className="muted">In front of Lagos Business School<br/>Sangotedo, Lagos State, Nigeria</div>
            <a
              className="btn location-link"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMapPin /> Get Directions
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}
