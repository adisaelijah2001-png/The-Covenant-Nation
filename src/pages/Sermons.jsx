import { useMemo, useState } from 'react'
import SermonCard from '../components/SermonCard'
import { sermonCategories, sermons, sortSermonsByNewest } from '../data/sermons'

export default function Sermons(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const orderedSermons = useMemo(() => sortSermonsByNewest(sermons), [])

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()

    return orderedSermons.filter(sermon => {
      const matchesCategory = category === 'All' || sermon.category === category
      const matchesQuery = !term || [
        sermon.title,
        sermon.speaker,
        sermon.category,
        sermon.type
      ].some(value => value.toLowerCase().includes(term))

      return matchesCategory && matchesQuery
    })
  }, [category, orderedSermons, query])

  return (
    <main className="container sermons-library-page">
      <header className="sermons-page-header">
        <p className="sermons-kicker">Messages</p>
        <h1>Sermons</h1>
        <p className="sermons-subtitle">Listen, learn, and grow through messages from The Covenant Nation.</p>
      </header>

      <div className="sermon-toolbar">
        <label className="sermon-search" aria-label="Search sermons">
          <span className="search-label">Search</span>
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Search by title, speaker, or category"
          />
        </label>

        <label className="sermon-filter" aria-label="Filter sermons by category">
          <span className="filter-label">Category</span>
          <select value={category} onChange={event => setCategory(event.target.value)}>
            {sermonCategories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="sermon-empty-state">
          <h3>No sermons found.</h3>
          <p>Try searching for another title, speaker, or category.</p>
        </div>
      ) : (
        <div className="sermon-grid">
          {filtered.map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      )}
    </main>
  )
}
