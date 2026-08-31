const poju = new URL('../assets/Pastor Poju.png', import.meta.url).href
const yetunde = new URL('../assets/Pastor Yetunde.png', import.meta.url).href
const tola = new URL('../assets/pastor Tola.avif', import.meta.url).href

export const leadership = [
  { id: 1, role: 'Senior Pastor', name: 'Pastor Poju', image: poju, bio: 'Senior Pastor of The Covenant Nation', social: { instagram: '', linkedin: '' } },
  { id: 2, role: 'Campus Pastor', name: 'Pastor Yetunde', image: yetunde, bio: 'Campus Pastor, overseeing the Sangotedo campus.', social: { instagram: '', linkedin: '' } },
  { id: 3, role: 'Assistant Campus Pastor', name: 'Pastor Tola', image: tola, bio: 'Assistant Campus Pastor, helping lead and strengthen the church community.', social: { instagram: '', linkedin: '' } },
]
