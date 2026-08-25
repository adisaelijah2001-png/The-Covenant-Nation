const levite = new URL('../assets/units/levite-protocol.jpg', import.meta.url).href
const children = new URL('../assets/units/children-church.jpg', import.meta.url).href
const media = new URL('../assets/units/media-unit.jpg', import.meta.url).href
const choir = new URL('../assets/units/choir.jpg', import.meta.url).href

export const units = [
  { id:1, name: 'Levite Protocol', image: levite, description: 'Editable description for Levite Protocol.',
    longDescription: 'The Levite Department serves with excellence in worship support and service. Members are trained in discipline, teamwork, and spiritual formation to support the house of God during services and events.',
    purpose: 'To provide orderly, reverent, and excellent support for worship and church gatherings.',
    mission: 'Equip members for faithful service, cultivate excellence in worship support, and foster spiritual growth among volunteers.',
    activities: 'Service coordination, rehearsal support, ushering, stage support, and special event preparation.',
    who: 'Individuals committed to disciplined service, team-oriented, and eager to serve in worship and support roles.'
  },
  { id:2, name: "Children's Church", image: children, description: 'Editable description for Children\'s Church.' },
  { id:3, name: 'Media Unit', image: media, description: 'Editable description for Media Unit.' },
  { id:4, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  { id:5, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  { id:6, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  { id:7, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  { id:8, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  { id:9, name: 'Choir / Worship', image: choir, description: 'Editable description for Choir.' },
  // Add more units as needed by editing this file
]
