import React from 'react'
import { Link } from 'react-router-dom'
import { events, images } from '../data'
import { PageHero, Reveal, Arrow } from '../Parts'
import { Reviews } from './Home'

export default function Events() {
  return (
    <>
      <PageHero eyebrow="EVENTS" title="Nights Worth Remembering" text="Live DJs, ladies nights, game days and private celebrations." src={images.g3} />
      <section className="section dark">
        <div className="wrap grid4 events">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 110} className="event"><span className="day">{e.day}</span><h4>{e.title}</h4><p>{e.text}</p></Reveal>
          ))}
        </div>
        <Reveal className="center cta"><Link to="/contact" className="btn gold">Plan Your Event <Arrow /></Link></Reveal>
      </section>
      <Reviews />
    </>
  )
}
