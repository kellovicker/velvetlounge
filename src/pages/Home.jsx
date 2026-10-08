import React from 'react'
import { Link } from 'react-router-dom'
import { features, menuCards, fullMenu, images, reviews } from '../data'
import { ContactInfo, ContactForm } from './Contact'
import { Icon, Star } from '../Icons'
import { Photo, Reveal, Arrow } from '../Parts'

export const Reviews = () => (
  <section className="reviews">
    <div className="wrap">
      <Reveal><p className="eyebrow grey">WHAT OUR GUESTS SAY</p><h2>Loved by Many</h2></Reveal>
      <div className="grid3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 130} className="review">
            <div className="who"><div className="photo avatar" /><p>“{r.text}”</p></div>
            <div className="meta"><div><b>{r.name}</b><small>{r.city}</small></div><span className="stars">{[...Array(5)].map((_, k) => <Star key={k} />)}</span></div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default function Home() {
  return (
    <>
      <section className="hero">
        <Photo src={images.hero} className="hero-photo" parallax />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="eyebrow load" style={{ '--d': '.1s' }}>FOOD &nbsp;•&nbsp; DRINKS &nbsp;•&nbsp; GOOD VIBES</p>
          <h1 className="load" style={{ '--d': '.25s' }}>Relax. Dine.<br /><em>Unwind.</em></h1>
          <p className="lead load" style={{ '--d': '.4s' }}>The Velvet Lounge is your go-to spot for great food, crafted drinks and unforgettable moments. Whether it's a casual hangout or a special celebration, we've got you.</p>
          <div className="row load" style={{ '--d': '.55s' }}>
            <Link to="/contact" className="btn gold">Book a Table <Arrow /></Link>
            <Link to="/menu" className="btn ghost">View Menu</Link>
          </div>
        </div>
      </section>
      <section className="features"><div className="wrap grid4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100} className="feature"><span className="ring"><Icon name={f.icon} size={26} /></span><h4>{f.title}</h4><p>{f.text}</p></Reveal>
        ))}
      </div></section>
      <section className="section dark home-about">
        <div className="wrap split">
          <Reveal className="split-img"><Photo src={images.g2} className="fill" /></Reveal>
          <Reveal delay={150} className="split-text">
            <p className="eyebrow">ABOUT US</p>
            <h2>Where good evenings begin</h2>
            <p>The Velvet Lounge was created with one idea: a place where you can walk in, exhale and enjoy yourself. From the first cocktail to the last bite of dessert, every detail is chosen to make you feel at home.</p>
            <p>Our kitchen cooks with fresh ingredients and bold flavours, our bar crafts every drink to order, and our team treats every guest like a regular.</p>
            <Link to="/about" className="btn ghost">See More <Arrow /></Link>
          </Reveal>
        </div>
      </section>
      <section className="menu"><div className="wrap menu-grid">
        <Reveal className="menu-intro">
          <p className="eyebrow dark">OUR MENU</p><h2>Great Food,<br />Better Company</h2>
          <p>From mouth-watering appetizers to signature dishes, our menu is crafted to satisfy every craving.</p>
          <Link to="/menu" className="btn gold">View Full Menu <Arrow /></Link>
        </Reveal>
        {menuCards.map((m, i) => (
          <Reveal key={m.title} delay={(i + 1) * 120} className="card">
            <Photo src={m.img} className="card-img" />
            <div className="card-body"><h5>{m.title}</h5><p>{m.text}</p><Link to="/menu">View Menu <Arrow s={14} /></Link></div>
          </Reveal>
        ))}
      </div></section>
      <section className="section darker mini-menu">
        <div className="wrap">
          <Reveal className="center"><p className="eyebrow">TASTE OF THE MENU</p><h2>Guest Favourites</h2></Reveal>
          <div className="items dark-items">
            {fullMenu.flatMap((c) => c.items.slice(0, 2)).map(([n, d, p], i) => (
              <Reveal key={n} delay={(i % 4) * 70} className="item"><div><h5>{n}</h5><p>{d}</p></div><span className="dots" /><b>{p}</b></Reveal>
            ))}
          </div>
          <Reveal className="center"><Link to="/menu" className="btn gold">See More <Arrow /></Link></Reveal>
        </div>
      </section>
      <section className="gallery"><div className="wrap gallery-grid">
        <Reveal className="g-main"><Photo src={images.g1} className="fill" /></Reveal>
        <div className="g-side"><Reveal delay={120}><Photo src={images.g2} className="fill" /></Reveal><Reveal delay={240}><Photo src={images.g3} className="fill" /></Reveal></div>
        <Reveal delay={200} className="g-text">
          <p className="eyebrow">GALLERY</p><h2>A Vibe Like No Other</h2>
          <p>Elegant interiors, ambient lighting, great music and amazing people. Take a look at what makes The Velvet Lounge special.</p>
          <Link to="/gallery" className="btn ghost">View Gallery <Arrow /></Link>
        </Reveal>
      </div></section>
      <section className="about">
        <Photo src={images.about} className="about-photo" parallax />
        <div className="about-shade" /><img className="about-glass" src={images.about} alt="" />
        <div className="wrap about-content"><Reveal className="about-text">
          <p className="eyebrow">ABOUT US</p><h2>More Than Just a Lounge</h2>
          <p>We're more than a place to eat and drink — we're a place to relax, connect and create memories. The Velvet Lounge brings together great food, refreshing drinks, and a warm, welcoming atmosphere.</p>
          <Link to="/about" className="btn ghost sm">Learn More <Arrow s={15} /></Link>
        </Reveal></div>
      </section>
      <Reviews />
      <section className="section dark home-contact">
        <div className="wrap">
          <Reveal className="center"><p className="eyebrow">CONTACT US</p><h2>Book a Table</h2></Reveal>
          <div className="contact-grid"><ContactInfo /><ContactForm /></div>
        </div>
      </section>
    </>
  )
}
