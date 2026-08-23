import SectionTitle from '../components/SectionTitle'
import UnitCard from '../components/UnitCard'
import { units } from '../data/units'

export default function Units(){
  return (
    <main className="container page units-page">
      <SectionTitle title="Church Units" subtitle="Explore our ministry units" />
      <div className="grid cols-3">
        {units.map(u => <UnitCard key={u.id} unit={u} />)}
      </div>
    </main>
  )
}
