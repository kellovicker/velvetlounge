import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { nav, contact, waLink } from './data'
import { Icon } from './Icons'
import { Logo } from './Icons'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'
import ChatWidget from './ChatWidget'

// Scroll animations: reveal-on-enter, parallax, solid header, progress bar. Re-runs on every page change.
function useScrollEffects(path) {
  useEffect(() => {
    window.scrollTo(0, 0)
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })
    const watch = () => document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el))
    watch()
    const mo = new MutationObserver(watch); mo.observe(document.getElementById('root'), { childList: true, subtree: true })
    const bar = document.querySelector('.progress'), hdr = document.querySelector('.header')
    let t = false
    const onScroll = () => {
      if (t) return; t = true
      requestAnimationFrame(() => {
        const y = scrollY, h = document.documentElement.scrollHeight - innerHeight
        bar.style.transform = `scaleX(${h ? y / h : 0})`
        hdr.classList.toggle('solid', y > 40)
        document.querySelectorAll('[data-parallax]').forEach((el) => { const r = el.parentElement.getBoundingClientRect(); el.style.transform = `translate3d(0,${r.top * -0.18}px,0) scale(1.15)` })
        t = false
      })
    }
    onScroll(); addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); mo.disconnect(); removeEventListener('scroll', onScroll) }
  }, [path])
}

function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useScrollEffects(pathname)
  useEffect(() => setOpen(false), [pathname])
  return (
    <>
      <div className="progress" />
      <header className="header">
        <Link to="/"><Logo /></Link>
        <nav className={open ? 'open' : ''}>
          {nav.map(([n, to]) => <NavLink key={n} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{n}</NavLink>)}
        </nav>
        <Link to="/contact" className="btn gold sm">Book a Table</Link>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </header>
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} /><Route path="/events" element={<Events />} /><Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="wrap foot-grid">
          <Link to="/"><Logo /></Link>
          <div><h6>Quick Links</h6>{nav.map(([n, to]) => <Link key={n} to={to}>{n}</Link>)}</div>
          <div className="contact"><h6>Contact Us</h6>
            <p><Icon name="pin" size={16} /><span>{contact.address[0]}<br />{contact.address[1]}</span></p>
            <p><Icon name="whatsapp" size={16} /><span><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp: {contact.whatsapp}</a></span></p>
            <p><Icon name="mail" size={16} /><span>{contact.email}</span></p>
          </div>
          <div><h6>Follow Us</h6><div className="social">{['insta', 'fb', 'x', 'tiktok'].map((s) => <a key={s} href="#/" aria-label={s}><Icon name={s} size={18} /></a>)}</div></div>
        </div>
        <div className="wrap foot-bar"><span>Good Food &nbsp;•&nbsp; Great Drinks &nbsp;•&nbsp; Unforgettable Moments</span><span>© 2025 The Velvet Lounge. All rights reserved.</span></div>
      </footer>
      <ChatWidget />
    </>
  )
}
export default function App() { return <HashRouter><Layout /></HashRouter> }
