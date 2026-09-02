import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiMapPin as MapPin, FiPhone as Phone, FiMessageSquare as MessageCircle, FiMail as Mail, FiArrowRight } from 'react-icons/fi'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'

const churchContact = {
  phone: '07083001038',
  phoneHref: 'tel:+2347083001038',
  whatsappUrl: 'https://wa.me/2347083001038',
  churchEmail: 'REPLACE_WITH_OFFICIAL_EMAIL',
  facebookUrl: 'REPLACE_WITH_OFFICIAL_FACEBOOK_URL',
  instagramUrl: 'REPLACE_WITH_OFFICIAL_INSTAGRAM_URL',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Covenant+Nation+Jesutedo,+in+front+of+Lagos+Business+School,+Sangotedo,+Lagos+State,+Nigeria'
}

const contactCards = [
  {
    title: 'Location',
    icon: <MapPin />,
    description: 'The Covenant Nation, Jesutedo • In front of Lagos Business School, Sangotedo',
    actionLabel: 'Get Directions',
    href: churchContact.googleMapsUrl,
    external: true,
    variant: 'primary'
  },
  {
    title: 'Phone',
    icon: <Phone />,
    description: 'Call us for prayer, service information, and general enquiries.',
    actionLabel: 'Call Us',
    href: churchContact.phoneHref,
    external: false,
    meta: churchContact.phone
  },
  {
    title: 'WhatsApp',
    icon: <MessageCircle />,
    description: 'Chat with our team for quick support and enquiries.',
    actionLabel: 'Chat on WhatsApp',
    href: churchContact.whatsappUrl,
    external: true,
    variant: 'success'
  },
  {
    title: 'Email',
    icon: <Mail />,
    description: 'Send us an email when you need to reach the church team.',
    actionLabel: 'Send Us an Email',
    href: churchContact.churchEmail === 'REPLACE_WITH_OFFICIAL_EMAIL' ? '#' : `mailto:${churchContact.churchEmail}`,
    external: false,
    variant: 'neutral'
  },
  {
    title: 'Facebook',
    icon: <FaFacebookF />,
    description: 'Stay connected with updates, events, and church news.',
    actionLabel: 'Facebook',
    href: churchContact.facebookUrl === 'REPLACE_WITH_OFFICIAL_FACEBOOK_URL' ? '#' : churchContact.facebookUrl,
    external: true
  },
  {
    title: 'Instagram',
    icon: <FaInstagram />,
    description: 'Follow our latest worship moments and church updates.',
    actionLabel: 'Instagram',
    href: churchContact.instagramUrl === 'REPLACE_WITH_OFFICIAL_INSTAGRAM_URL' ? '#' : churchContact.instagramUrl,
    external: true
  }
]

export default function Contact(){
  return (
    <main className="container contact-page">
      <ScrollReveal>
        <header className="section-title contact-hero-title">
          <p className="sermons-kicker">Reach out</p>
          <h1>Contact Us</h1>
          <h2>We are here to help</h2>
          <p>We are here to help. Whether you have a question about our services, discipleship, church units, or simply want to connect with us, our team would be glad to hear from you. Reach out through any of the channels below and we will do our best to assist you.</p>
        </header>
      </ScrollReveal>

      <ScrollReveal className="contact-cta-wrap">
        <a href="#contact-channels" className="btn primary contact-cta-btn">Get In Touch <FiArrowRight /></a>
      </ScrollReveal>

      <section id="contact-channels" className="contact-card-grid">
        {contactCards.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 70} className="contact-card-wrap">
            <article className={`contact-card ${item.variant || ''}`}>
              <div className="contact-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.meta && <span className="contact-meta">{item.meta}</span>}
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="contact-card-link"
              >
                {item.actionLabel}
              </a>
            </article>
          </ScrollReveal>
        ))}
      </section>

      <section className="contact-form-panel">
        <ScrollReveal>
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
