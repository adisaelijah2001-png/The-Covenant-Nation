const bible = new URL('../assets/Bible Dept.png', import.meta.url).href
const camera = new URL('../assets/Camera Dept.png', import.meta.url).href
const children = new URL('../assets/Children Dept.png', import.meta.url).href
const choir = new URL('../assets/Choir Department.png', import.meta.url).href
const drama = new URL('../assets/Drama Dept.png', import.meta.url).href
const ushering = new URL('../assets/Ushering Department.png', import.meta.url).href

export const units = [
  { id: 1, name: 'Bible Department', image: bible, description: 'Grow in the Word and help others build a strong foundation of faith.' },
  { id: 2, name: 'Camera Department', image: camera, description: 'Capture and share church services and events through photography and video.' },
  { id: 3, name: "Children's Church", image: children, description: 'Help children learn about God in a welcoming and engaging environment.' },
  { id: 4, name: 'Choir / Worship', image: choir, description: 'Use music and worship to serve the church and lead the congregation.' },
  { id: 5, name: 'Drama Department', image: drama, description: 'Share messages of faith through drama and creative performance.' },
  { id: 6, name: 'Ushering Department', image: ushering, description: 'Welcome and assist members and guests during church services and events.' },
  // Add more units as needed by editing this file
]
