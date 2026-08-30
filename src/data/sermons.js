const officialEbookUrl = 'https://elibrary.insightsforliving.org/'

const lbc2026Image = new URL('../assets/sermons/lbc-2026.svg', import.meta.url).href
const sermonGoldImage = new URL('../assets/sermons/sermon-gold.svg', import.meta.url).href
const worshipPortraitImage = new URL('../assets/sermons/worship-portrait.svg', import.meta.url).href
const conferenceCrestImage = new URL('../assets/sermons/conference-crest.svg', import.meta.url).href

export const sermons = [
  {
    id: 1,
    title: 'Lekki Believers Convention — Ebenezer Joy Service',
    speaker: 'The Covenant Nation',
    date: '29 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Service',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 2,
    title: 'Lekki Believers Convention — Thy Kingdom Come — Day 5',
    speaker: 'The Covenant Nation',
    date: '28 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 3,
    title: 'Lekki Believers Convention 2026 — Pastor George Izunwa | Day 4 — Session 2',
    speaker: 'Pastor George Izunwa',
    date: '27 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 4,
    title: 'Lekki Believers Convention 2026 — Pastor Yemi Davids | Day 4 — Session 1',
    speaker: 'Pastor Yemi Davids',
    date: '27 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 5,
    title: 'Lekki Believers Convention 2026 — Apostle Isi Igenegba | Day 3 — Session 1',
    speaker: 'Apostle Isi Igenegba',
    date: '26 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 6,
    title: 'Lekki Believers Convention 2026 — Apostle Michael Orokpo | Day 3 — Session 2',
    speaker: 'Apostle Michael Orokpo',
    date: '26 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 7,
    title: 'Lekki Believers Convention 2026 — Pastor Debola Deji-Kurunmi | Day 2 — Session 1',
    speaker: 'Pastor Debola Deji-Kurunmi',
    date: '25 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 8,
    title: 'Lekki Believers Convention 2026 — Apostle Gideon Odoma | Day 2 — Session 2',
    speaker: 'Apostle Gideon Odoma',
    date: '25 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 9,
    title: 'Lekki Believers Convention 2026 — Bishop Julian Kyula | Day 1 — Session 1',
    speaker: 'Bishop Julian Kyula',
    date: '24 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 10,
    title: 'Lekki Believers Convention 2026 — Rev. Samson Ajetomobi | Day 1 — Session 2',
    speaker: 'Rev. Samson Ajetomobi',
    date: '24 August 2026',
    category: 'Lekki Believers Convention 2026',
    type: 'Video / Conference Session',
    image: lbc2026Image,
    url: officialEbookUrl
  },
  {
    id: 11,
    title: 'Sitting To Receive Heaven\'s Best Through Meditation',
    speaker: 'Pastor Poju Oyemade',
    date: '23 August 2026',
    category: 'Sunday Service',
    type: 'Video',
    image: worshipPortraitImage,
    url: officialEbookUrl
  },
  {
    id: 12,
    title: 'The Practice Of Meditation (2)',
    speaker: 'Pastor Poju Oyemade',
    date: '16 August 2026',
    category: 'Sunday Service',
    type: 'Video',
    image: sermonGoldImage,
    url: officialEbookUrl
  },
  {
    id: 13,
    title: 'BE! Women Conference 2026 — Day 2',
    speaker: 'Pastor Poju Oyemade',
    date: '16 August 2026',
    category: 'Conference',
    type: 'Video / Conference Session',
    image: conferenceCrestImage,
    url: officialEbookUrl
  },
  {
    id: 14,
    title: 'BE! Women Conference 2026 — Day 2',
    speaker: 'Pastor Toyin Poju-Oyemade',
    date: '16 August 2026',
    category: 'Conference',
    type: 'Video / Conference Session',
    image: conferenceCrestImage,
    url: officialEbookUrl
  }
]

export const sermonCategories = ['All', 'Lekki Believers Convention 2026', 'Sunday Service', 'Conference', 'Other']

export function sortSermonsByNewest(sermonList = sermons) {
  return [...sermonList].sort((a, b) => toSortableDate(b.date) - toSortableDate(a.date))
}

function toSortableDate(dateText) {
  if (!dateText) return 0

  const normalized = dateText.trim()

  const dayMatch = normalized.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/)
  if (dayMatch) {
    const [, day, monthName, year] = dayMatch
    const parsed = new Date(`${year} ${monthName} ${day}`)
    if (!Number.isNaN(parsed.getTime())) return parsed.getTime()
  }

  const monthOnly = new Date(normalized)
  if (!Number.isNaN(monthOnly.getTime())) return monthOnly.getTime()

  const fallback = new Date(`${normalized} 1`)
  if (!Number.isNaN(fallback.getTime())) return fallback.getTime()

  return 0
}

