import React, { useState } from 'react';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const proof = [
    { value: '4.9★', label: 'from 12,000 reviews' },
    { value: '30 min', label: 'avg. delivery time' },
    { value: '120+', label: 'partner farms' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 24px 100px',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 75% 15%, rgba(255, 122, 26, 0.18) 0%, transparent 45%), linear-gradient(180deg, #0c0a08 0%, #141010 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255, 200, 150, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <div style={{ animation: 'slideUp 0.7s ease both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(255, 122, 26, 0.1)',
              border: '1px solid rgba(255, 122, 26, 0.25)',
              borderRadius: '100px',
              marginBottom: '28px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff7a1a', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-2)', letterSpacing: '0.02em' }}>
              Fresh from farm to your door
            </span>
          </div>

          <h1
            style={{
              fontSize: '68px',
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
              color: 'var(--fg)',
            }}
          >
            Real food,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 60%, #e63946 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              delivered with fire.
            </span>
          </h1>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--muted)',
              margin: '0 0 40px',
              maxWidth: '520px',
            }}
          >
            Ember& Root brings chef-crafted meals and market-fresh ingredients
            straight to your table. Sourced from local farms, cooked over open
            flame, and delivered hot in under 30 minutes.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1512',
                background: primaryHover
                  ? 'linear-gradient(135deg, #ffb347 0%, #ff7a1a 100%)'
                  : 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 100%)',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
                transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: primaryHover
                  ? '0 18px 40px rgba(255, 122, 26, 0.4)'
                  : '0 10px 28px rgba(255, 122, 26, 0.25)',
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Order
            </button>
            <button
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--fg)',
                background: secondaryHover ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              Explore the Menu
            </button>
          </div>

          <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
            {proof.map((p) => (
              <div key={p.label}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 700, color: 'var(--fg)' }}>
                  {p.value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--muted-2)' }}>{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            animation: 'floaty 6s ease-in-out infinite',
          }}
        >
          <div
            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
              background: 'linear-gradient(160deg, #221b16 0%, #141010 100%)',
              padding: '10px',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
              alt="A rustic table spread of fresh, chef-prepared food"
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '-22px',
              left: '-22px',
              background: 'rgba(26, 21, 18, 0.9)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ff7a1a, #ffb347)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1512" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>Order confirmed</div>
              <div style={{ fontSize: '12px', color: 'var(--muted-2)' }}>Arriving in 24 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}