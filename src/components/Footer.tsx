import React, { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const columns = {
    Menu: ['This Week', 'Signature Bowls', 'Farm Boxes', 'Desserts'],
    Company: ['Our Story', 'Partner Farms', 'Careers', 'Press'],
    Support: ['Help Center', 'Track Order', 'Delivery Areas', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Allergen Info', 'Cookies'],
  };

  const socials = ['Instagram', 'TikTok', 'X', 'Facebook'];

  return (
    <footer
      style={{
        padding: '80px 24px 40px',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr repeat(4, 1fr)',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1512" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11h18M5 11a7 7 0 0 1 14 0M2 15h20M6 19h12" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 700, color: 'var(--fg)' }}>
                Ember& Root
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted-2)', lineHeight: 1.7, maxWidth: '300px', margin: 0 }}>
              Chef-crafted, farm-fresh food cooked over open flame and delivered
              hot to your door. Real ingredients, real flavor, no compromises.
            </p>
          </div>

          {Object.entries(columns).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--fg)',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {category}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => {
                  const key = `${category}-${link}`;
                  return (
                    <li key={key} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        onMouseEnter={() => setHoveredLink(key)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                          fontSize: '14px',
                          color: hoveredLink === key ? 'var(--accent-2)' : 'var(--muted-2)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '30px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '14px', color: 'var(--muted-2)' }}>
            © {new Date().getFullYear()} Ember& Root (SITE). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '22px' }}>
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                onMouseEnter={() => setHoveredSocial(s)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  fontSize: '14px',
                  color: hoveredSocial === s ? 'var(--accent-2)' : 'var(--muted-2)',
                  transition: 'color 0.2s ease',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}