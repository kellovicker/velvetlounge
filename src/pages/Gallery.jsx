import React, { useState } from 'react'
import { gallery, images } from '../data'
import { PageHero, Photo, Reveal } from '../Parts'

export default function Gallery() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageHero eyebrow="GALLERY" title="A Vibe Like No Other" text="Elegant interiors, ambient lighting, great music and amazing people." src={images.g3} />
      <section className="section dark">
        <div className="wrap mosaic">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 110} className={`tile ${g.cls || ''}`} onClick={() => setOpen(g.src)}>
              <Photo src={g.src} className="fill" />
            </Reveal>
          ))}
        </div>
      </section>
      {open && <div className="lightbox" onClick={() => setOpen(null)}><img src={open} alt="" /><span>×</span></div>}
    </>
  )
}
