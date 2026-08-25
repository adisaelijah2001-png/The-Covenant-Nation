import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { units } from '../data/units'

export default function JoinUnit(){
  const [form, setForm] = useState({fullName:'',email:'',phone:'',address:'',dob:'',gender:'',bornAgain:'',accepted:'',attended:'',attendLength:'',servingElse:'',unit:'',why:'',experience:'',skills:'',emergencyName:'',emergencyPhone:'',notes:''})
  const [status, setStatus] = useState(null)

  function update(e){
    const {name,value,type,checked} = e.target
    setForm(f=>({...f,[name]: type==='checkbox' ? (checked? 'Yes':'No') : value}))
  }

  function submit(e){
    e.preventDefault()
    // No backend configured — just show a success message and log
    console.log('JoinUnit form submitted', form)
    setStatus('success')
  }

  if(status==='success'){
    return (
      <main className="container">
        <SectionTitle title="Thank you" subtitle="We've received your application" />
        <p>Thank you for your interest in serving with us. We've received your application and our team will get in touch with you soon.</p>
      </main>
    )
  }

  return (
    <main className="container">
      <SectionTitle title="Join a Church Unit" subtitle="Take the next step to serve" />
      <form onSubmit={submit} className="contact-form" style={{maxWidth:820}}>
        <h4>Personal Information</h4>
        <input name="fullName" placeholder="Full name *" value={form.fullName} onChange={update} required />
        <input name="email" type="email" placeholder="Email address *" value={form.email} onChange={update} required />
        <input name="phone" placeholder="Phone number *" value={form.phone} onChange={update} required />
        <input name="address" placeholder="Residential address" value={form.address} onChange={update} />
        <input name="dob" type="date" placeholder="Date of birth" value={form.dob} onChange={update} />
        <select name="gender" value={form.gender} onChange={update}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Prefer not to say</option>
        </select>

        <h4>Church Information</h4>
        <label><input name="bornAgain" type="checkbox" onChange={update} /> I am a born-again Christian</label>
        <label><input name="accepted" type="checkbox" onChange={update} /> I have accepted Jesus Christ as Lord</label>
        <label><input name="attended" type="checkbox" onChange={update} /> I have attended this church before</label>
        <input name="attendLength" placeholder="How long have you been attending?" value={form.attendLength} onChange={update} />
        <label><input name="servingElse" type="checkbox" onChange={update} /> I am currently serving in another unit</label>

        <h4>Unit Information</h4>
        <select name="unit" value={form.unit} onChange={update} required>
          <option value="">Select a unit to join</option>
          {units.map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
        </select>
        <input name="why" placeholder="Why are you interested in joining this unit?" value={form.why} onChange={update} />
        <input name="experience" placeholder="Previous church/ministry experience" value={form.experience} onChange={update} />
        <input name="skills" placeholder="Skills, talents, or areas of interest" value={form.skills} onChange={update} />

        <h4>Additional Information</h4>
        <input name="emergencyName" placeholder="Emergency contact name" value={form.emergencyName} onChange={update} />
        <input name="emergencyPhone" placeholder="Emergency contact phone" value={form.emergencyPhone} onChange={update} />
        <textarea name="notes" placeholder="Any additional information" value={form.notes} onChange={update} />

        <div>
          <button className="btn primary" type="submit">Submit Application</button>
        </div>
      </form>
    </main>
  )
}
