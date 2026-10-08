import React, { useState } from 'react'
import { contact, images, waLink } from '../data'
import { Icon } from '../Icons'
import { PageHero, Reveal } from '../Parts'

export function ContactInfo() {
  return (
    <Reveal className="info">
      <h2>Find Us</h2>
      <p className="ci"><Icon name="pin" size={18} /><span>{contact.address[0]}<br />{contact.address[1]}</span></p>
      <p className="ci"><Icon name="whatsapp" size={18} /><span><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp: {contact.whatsapp}</a></span></p>
      <p className="ci"><Icon name="mail" size={18} /><span>{contact.email}</span></p>
      <h3>Opening Hours</h3>
      {contact.hours.map(([d, t]) => <p key={d} className="hr"><span>{d}</span><b>{t}</b></p>)}
    </Reveal>
  )
}

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '2', note: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSent(true) /* swap for your backend / WhatsApp link when ready */ }
  return (
    <Reveal delay={150} className="formbox">
      {sent ? (
        <div className="thanks"><h2>Thank you, {f.name || 'friend'}!</h2><p>Your reservation request has been received. We'll confirm shortly on WhatsApp ({f.phone || 'your number'}).</p><button className="btn ghost" onClick={() => setSent(false)}>Make another booking</button></div>
      ) : (
        <form onSubmit={submit}>
          <h2>Reserve a Table</h2>
          <div className="fg"><input required placeholder="Full name" value={f.name} onChange={set('name')} /><input required placeholder="WhatsApp number" value={f.phone} onChange={set('phone')} /></div>
          <input type="email" placeholder="Email (optional)" value={f.email} onChange={set('email')} />
          <div className="fg"><input required type="date" value={f.date} onChange={set('date')} /><input required type="time" value={f.time} onChange={set('time')} /></div>
          <select value={f.guests} onChange={set('guests')}>{[1,2,3,4,5,6,7,8,10,12].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}</select>
          <textarea rows="4" placeholder="Special requests (birthday, anniversary, seating...)" value={f.note} onChange={set('note')} />
          <button className="btn gold" type="submit">Request Reservation</button>
        </form>
      )}
    </Reveal>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Book a Table" text="Reserve your spot or ask us anything. We'll get back to you quickly." src={images.g1} />
      <section className="section dark"><div className="wrap contact-grid"><ContactInfo /><ContactForm /></div></section>
    </>
  )
}
