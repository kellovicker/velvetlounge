import React from 'react'
import { Link } from 'react-router-dom'
import { images, features } from '../data'
import { Icon } from '../Icons'
import { PageHero, Photo, Reveal, Arrow } from '../Parts'
import { Reviews } from './Home'

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT US" title="More Than Just a Lounge" text="A warm, stylish corner of Port Harcourt made for good food, crafted drinks and the people you love." src={images.g1} />
      <section className="section dark">
        <div className="wrap split">
          <Reveal className="split-text">
            <p className="eyebrow">OUR STORY</p>
            <h2>Where good evenings begin</h2>
            <p>The Velvet Lounge was created with one idea: a place where you can walk in, exhale and enjoy yourself. From the first cocktail to the last bite of dessert, every detail, the lighting, the music, the plates, is chosen to make you feel at home.</p>
            <p>Our kitchen cooks with fresh ingredients and bold flavours, our bar team crafts every drink to order, and our staff treats every guest like a regular.</p>
            <Link to="/contact" className="btn gold">Book a Table <Arrow /></Link>
          </Reveal>
          <Reveal delay={150} className="split-img"><Photo src={images.g2} className="fill" /></Reveal>
        </div>
      </section>
      <section className="section darker">
        <div className="wrap">
          <Reveal className="center"><p className="eyebrow">WHAT WE STAND FOR</p><h2>Our Promise</h2></Reveal>
          <div className="grid4 values">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} className="feature"><span className="ring"><Icon name={f.icon} size={26} /></span><h4>{f.title}</h4><p>{f.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap stats">
          {[['5+','Years of good vibes'],['40+','Menu favourites'],['20+','Signature cocktails'],['1000s','Happy guests']].map(([n, l], i) => (
            <Reveal key={l} delay={i * 100} className="stat"><b>{n}</b><span>{l}</span></Reveal>
          ))}
        </div>
      </section>
      <Reviews />
    </>
  )
}
