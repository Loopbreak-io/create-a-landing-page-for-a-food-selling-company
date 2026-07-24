import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Menu', 'How It Works', 'Reviews', 'Farms'];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(12, 10, 8, 0.85)' : 'rgba(12, 10, 8, 0.35)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        padding: '16px 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 22px rgba(255, 122, 26, 0.4)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1512" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11h18M5 11a7 7 0 0 1 14 0M2 15h20M6 19h12" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--fg)',
              letterSpacing: '-0.02em',
            }}
          >
            Ember& Root
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '34px',
            alignItems: 'center',
          }}
          className="nav-links"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: hoveredLink === link ? 'var(--accent-2)' : 'var(--muted)',
                transition: 'color 0.2s ease',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            padding: '11px 22px',
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            color: '#1a1512',
            background: ctaHover
              ? 'linear-gradient(135deg, #ffb347 0%, #ff7a1a 100%)'
              : 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transform: ctaHover ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: ctaHover
              ? '0 12px 28px rgba(255, 122, 26, 0.4)'
              : '0 6px 18px rgba(255, 122, 26, 0.25)',
            transition: 'all 0.25s ease',
          }}
        >
          Order Now
        </button>
      </div>
    </nav>
  );
}