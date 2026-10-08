import React, { useEffect, useRef, useState } from 'react'
import { contact, waLink } from './data'

// ---- n8n connection -------------------------------------------------------
// Set VITE_N8N_WEBHOOK_URL in .env (see .env.example). Leave empty to run in demo mode.
const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || ''
const QUICK = ['View menu', 'Book a table', 'Opening hours', 'Talk to a human']

const getSession = () => {
  try {
    let id = localStorage.getItem('vl_chat_session')
    if (!id) { id = 'vl-' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('vl_chat_session', id) }
    return id
  } catch { return 'vl-' + Math.random().toString(36).slice(2) }
}

// Accepts {reply} | {output} | {text} | {message} | [{...}] | plain text
const parseReply = async (res) => {
  const raw = await res.text()
  try {
    let d = JSON.parse(raw); if (Array.isArray(d)) d = d[0]
    return d?.reply ?? d?.output ?? d?.text ?? d?.message ?? raw
  } catch { return raw }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([{ from: 'bot', text: 'Hi, welcome to The Velvet Lounge! How can we help you today?' }])
  const session = useRef(getSession())
  const end = useRef(null)
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, busy, open])

  const send = async (text) => {
    const t = text.trim()
    if (!t || busy) return
    setMsgs((m) => [...m, { from: 'me', text: t }]); setInput(''); setBusy(true)
    try {
      if (!WEBHOOK_URL) throw new Error('no-webhook')
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: session.current, message: t, page: location.hash || '/', source: 'website', sentAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error('bad-status')
      const reply = await parseReply(res)
      setMsgs((m) => [...m, { from: 'bot', text: String(reply || 'Thanks, we got your message.') }])
    } catch (e) {
      setMsgs((m) => [...m, { from: 'bot', text: e.message === 'no-webhook'
        ? 'Chat is in demo mode (no n8n webhook connected yet).'
        : `We couldn't reach support right now. Please message us on WhatsApp at ${contact.whatsapp}.`, wa: true }])
    } finally { setBusy(false) }
  }

  return (
    <>
      <button className={`chat-fab ${open ? 'open' : ''}`} aria-label="Live support" onClick={() => setOpen(!open)}>
        {open
          ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          : <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.7 7L4 20l1.1-4.4A8 8 0 1 1 21 12z" /><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" strokeWidth="2.4" /></svg>}
      </button>
      <div className={`chat ${open ? 'show' : ''}`} role="dialog" aria-label="Live support chat">
        <div className="chat-head">
          <span className="dot" /><div><b>Velvet Lounge Support</b><small>Typically replies in a few minutes</small></div>
        </div>
        <div className="chat-body">
          {msgs.map((m, i) => (
            <div key={i} className={`bubble ${m.from}`}>{m.text}
              {m.wa && <a href={waLink()} target="_blank" rel="noreferrer">Open WhatsApp</a>}
            </div>
          ))}
          {busy && <div className="bubble bot typing"><i /><i /><i /></div>}
          {msgs.length === 1 && <div className="quick">{QUICK.map((q) => <button key={q} onClick={() => send(q)}>{q}</button>)}</div>}
          <div ref={end} />
        </div>
        <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(input) }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <button type="submit" aria-label="Send" disabled={busy || !input.trim()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
          </button>
        </form>
      </div>
    </>
  )
}
