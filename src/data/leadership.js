const poju = new URL('../assets/Pastor Poju.png', import.meta.url).href
const yetunde = new URL('../assets/Pastor Yetunde.png', import.meta.url).href
const assistant = new URL('../assets/leadership/assistant-campus-pastor.jpg', import.meta.url).href

export const leadership = [
  { id: 1, role: 'Senior Pastor', name: 'Pastor Poju', image: poju, bio: 'Senior Pastor of The Covenant Nation, Jesutedo. Editable bio goes here.' },
  { id: 2, role: 'Campus Pastor', name: 'Pastor Yetunde', image: yetunde, bio: 'Campus Pastor, overseeing the Sangotedo campus. Editable bio goes here.' },
  { id: 3, role: 'Assistant Campus Pastor', name: 'Assistant Campus Pastor (Placeholder)', image: assistant, bio: 'Editable bio goes here.' },
]
