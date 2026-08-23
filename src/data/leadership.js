const hero = new URL('../assets/leadership/senior-pastor.jpg', import.meta.url).href
const campus = new URL('../assets/leadership/campus-pastor.jpg', import.meta.url).href
const assistant = new URL('../assets/leadership/assistant-campus-pastor.jpg', import.meta.url).href

export const leadership = [
  { id: 1, role: 'Senior Pastor', name: 'Senior Pastor (Placeholder)', image: hero, bio: 'Editable bio goes here.' },
  { id: 2, role: 'Campus Pastor', name: 'Campus Pastor (Placeholder)', image: campus, bio: 'Editable bio goes here.' },
  { id: 3, role: 'Assistant Campus Pastor', name: 'Assistant Campus Pastor (Placeholder)', image: assistant, bio: 'Editable bio goes here.' },
]
