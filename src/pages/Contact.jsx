import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <main className="container page contact-page">
      <SectionTitle title="Contact" subtitle="Get in touch or find us" />

      <div className="grid cols-2 contact-grid">
        <div>
          <h3>The Covenant Nation, Jesutedo</h3>
          <p>KM 22, Lekki-Epe Expressway, Opposite Lagos Business School, Alasia, Lagos</p>
          <p>Service Times: Sunday 7:30 AM &amp; 10:00 AM</p>
        </div>
        <ContactForm />
      </div>

      <div className="map-placeholder">Google Maps embed placeholder</div>
    </main>
  )
}
