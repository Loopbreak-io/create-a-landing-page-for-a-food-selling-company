import React, { useState } from 'react';

export default function CTA() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section style={{ padding: '90px 24px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '30px',
          padding: '72px 48px',
          background:
            'radial-gradient(circle at 20% 20%, rgba(230,57,70,0.35) 0%, transparent 50%), linear-gradient(135deg, #ff7a1a 0%, #e6591a 55%, #b8340f 100%)',
          textAlign: 'center',
          boxShadow: '0 30px 80px rgba(255, 122, 26, 0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: '0 0 18px',
              textShadow: '0 2px 20px rgba(0,0,0,0.2)',
            }}
          >
            Your next great meal
            <br />
            is 30 minutes away
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 245, 235, 0.92)',
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: '0 auto 38px',
            }}
          >
            Get 25% off your first order and taste the difference real,
            farm-fresh, fire-cooked food makes.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#b8340f',
                background: '#fff',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
                transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: primaryHover ? '0 16px 34px rgba(0,0,0,0.28)' : '0 8px 20px rgba(0,0,0,0.18)',
                transition: 'all 0.3s ease',
              }}
            >
              Claim 25% Off
            </button>
            <button
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
              style={{
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#fff',
                background: secondaryHover ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              Browse the Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}