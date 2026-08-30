import { FiDownload, FiExternalLink, FiPlayCircle } from 'react-icons/fi'

export default function SermonCard({ sermon }){
  const isVideo = /^video/i.test(sermon.type || '')
  const actionLabel = isVideo ? 'Watch Message' : 'View / Download Message'

  return (
    <article className="card sermon-card">
      <div className="sermon-image-wrap">
        <img src={sermon.image} alt={sermon.title} />
      </div>

      <div className="sermon-card-body">
        <span className="sermon-category">{sermon.category}</span>
        <h3>{sermon.title}</h3>
        <p className="sermon-speaker">{sermon.speaker}</p>
        <p className="sermon-date">{sermon.date}</p>
        <p className="sermon-type">{sermon.type}</p>

        <a
          className="btn sermon-download"
          href={sermon.url || 'https://elibrary.insightsforliving.org/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isVideo ? <FiPlayCircle /> : <FiDownload />}
          <span>{actionLabel}</span>
          <FiExternalLink />
        </a>
      </div>
    </article>
  )
}
