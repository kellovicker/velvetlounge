import React from 'react'
import { Icon } from './Icons'
export const Photo = ({ src, className = '', parallax, children }) => (
  <div className={`photo ${className}`}>{src ? <div className="photo-bg" data-parallax={parallax ? '' : undefined} style={{ backgroundImage: `url(${src})` }} /> : <div className="photo-bg warm" />}{children}</div>
)
export const Reveal = ({ delay = 0, className = '', children, ...p }) => (
  <div data-reveal className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...p}>{children}</div>
)
export const PageHero = ({ eyebrow, title, text, src }) => (
  <section className="page-hero">
    <Photo src={src} className="ph-photo" parallax />
    <div className="ph-shade" />
    <div className="wrap ph-content">
      <p className="eyebrow load" style={{ '--d': '.1s' }}>{eyebrow}</p>
      <h1 className="load" style={{ '--d': '.25s' }}>{title}</h1>
      {text && <p className="lead load" style={{ '--d': '.4s' }}>{text}</p>}
    </div>
  </section>
)
export const Arrow = ({ s = 16 }) => <Icon name="arrow" size={s} />
