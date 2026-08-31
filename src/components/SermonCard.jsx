import { FiDownload, FiExternalLink, FiPlayCircle } from 'react-icons/fi'

export default function SermonCard({ sermon }) {
  const isVideo = /^video/i.test(sermon.type || '')
  const actionLabel = isVideo ? 'Watch Message' : 'View / Download Message'

  return (
    <article className="sermon-card">
      <div className="sermon-image-wrapper">
        <img
          src={sermon.image}
          alt={sermon.title}
          className="sermon-image"
        />

        <div className="sermon-type-badge">
          {sermon.type}
        </div>
      </div>

      <div className="sermon-card-content">
        <div className="sermon-badge">
          {sermon.category}
        </div>

        <h3 className="sermon-title">
          {sermon.title}
        </h3>

        <p className="sermon-speaker">
          {sermon.speaker}
        </p>

        <p className="sermon-date">
          {sermon.date}
        </p>

        <a
          href={
            sermon.url ||
            'https://elibrary.insightsforliving.org/'
          }
          target="_blank"
          rel="noopener noreferrer"
          className="btn sermon-download-btn"
        >
          {isVideo ? <FiPlayCircle size={18} /> : <FiDownload size={18} />}

          <span>{actionLabel}</span>

          <FiExternalLink size={16} />
        </a>
      </div>
    </article>
  )
}
