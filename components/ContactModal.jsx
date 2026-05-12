'use client'
import { useEffect } from 'react'

const FORM_SRC = 'https://app.stracforms.com/#/form/c5e9d9f8-c600-4e5b-b5e8-26840622497b'

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(13,15,20,0.72)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: 'white',
          borderRadius: 16,
          border: 'var(--v4-border)',
          width: '100%',
          maxWidth: 560,
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 12, right: 12, zIndex: 10,
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--color-v4-dark)', border: 'none',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="1" y1="1" x2="11" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="11" y1="1" x2="1" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <iframe
          className="modal-iframe"
          id="FormIFrame-c5e9d9f8-c600-4e5b-b5e8-26840622497b"
          title="Fill out your details"
          src={FORM_SRC}
          width="100%"
          height="600"
          frameBorder="0"
          style={{ display: 'block', width: '100%', height: 600 }}
        />
      </div>
    </div>
  )
}
