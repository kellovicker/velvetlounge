import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fullMenu, images } from '../data'
import { PageHero, Reveal, Arrow } from '../Parts'

export default function Menu() {
  const [tab, setTab] = useState('all')
  const list = tab === 'all' ? fullMenu : fullMenu.filter((c) => c.id === tab)
  return (
    <>
      <PageHero eyebrow="OUR MENU" title="Great Food, Better Company" text="From mouth-watering appetizers to signature dishes and handcrafted cocktails." src={images.main} />
      <section className="section cream">
        <div className="wrap">
          <div className="tabs">
            {[{ id: 'all', title: 'All' }, ...fullMenu].map((c) => (
              <button key={c.id} className={tab === c.id ? 'on' : ''} onClick={() => setTab(c.id)}>{c.title}</button>
            ))}
          </div>
          {list.map((cat) => (
            <div key={cat.id + tab} className="cat">
              <Reveal><h2>{cat.title}</h2><p className="note">{cat.note}</p></Reveal>
              <div className="items">
                {cat.items.map(([n, d, p], i) => (
                  <Reveal key={n} delay={i * 70} className="item">
                    <div><h5>{n}</h5><p>{d}</p></div><span className="dots" /><b>{p}</b>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <Reveal className="center"><Link to="/contact" className="btn gold">Book a Table <Arrow /></Link></Reveal>
        </div>
      </section>
    </>
  )
}
