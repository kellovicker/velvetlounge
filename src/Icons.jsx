import React from 'react'
const P = { fill:'none', stroke:'currentColor', strokeWidth:1.6, strokeLinecap:'round', strokeLinejoin:'round' }
export const Icon = ({ name, size = 24 }) => {
  const d = {
    fork: <><path d="M8 3v8M5 3v5a3 3 0 0 0 6 0V3M8 11v10"/><path d="M17 3c-2 2-2 6 0 8v10M17 3v18"/></>,
    cocktail: <><path d="M4 4h16l-8 9z"/><path d="M12 13v8M8 21h8M17 4l3-2"/></>,
    users: <><circle cx="12" cy="9" r="3"/><circle cx="5.5" cy="10" r="2"/><circle cx="18.5" cy="10" r="2"/><path d="M7 19c0-3 2.2-5 5-5s5 2 5 5M2 18c0-2 1.5-3.5 3.5-3.5M22 18c0-2-1.5-3.5-3.5-3.5"/></>,
    gem: <><path d="M6 4h12l4 5-10 12L2 9z"/><path d="M2 9h20M9 4l3 5 3-5M12 21 8 9M12 21l4-12"/></>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
    pin: <><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
    whatsapp: <><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    insta: <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".6"/></>,
    fb: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>,
    x: <path d="M4 4l16 16M20 4 4 20"/>,
    tiktok: <path d="M14 4v11a3.5 3.5 0 1 1-3.5-3.5M14 4c0 2.5 2 4 4.5 4"/>,
  }[name]
  return <svg width={size} height={size} viewBox="0 0 24 24" {...P}>{d}</svg>
}
export const Star = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#e8b84b"><path d="m12 2 3 7 7 .6-5.3 4.7L18.2 22 12 18.3 5.8 22l1.5-7.7L2 9.6 9 9z"/></svg>
export const Logo = () => (
  <div className="logo">
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" stroke="#e8b84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h32L22 26z"/><path d="M22 26v16M13 42h18M30 8l8-6"/><circle cx="31" cy="4" r="2" fill="#e8b84b"/></svg>
    <span><b>THE VELVET</b><small>LOUNGE</small></span>
  </div>
)
