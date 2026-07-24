import React, { useState } from 'react';

export default function HowItWorks() {
  const [hoveredId, setHoveredId] = useState(null);

  const steps = [
    {
      id: 'st1',
      num: '01',
      title: 'Pick your plates',
      description: 'Browse this week’s chef-curated menu or build a box of farm-fresh ingredients. Filter by diet, cuisine, or craving.',
    },
    {
      id: 'st2',
      num: '02',
      title: 'We cook & pack',
      description: 'Our kitchen fires up your order the moment you confirm, then seals it in an insulated ember-box to lock in the heat.',
    },
    {
      id: 'st3',
      num: '03',
      title: 'Delivered hot',
      description: 'Track your rider in real time and get it hand-delivered to your door in under 30 minutes. Just plate, eat, and enjoy.',
    },
  ];

  return (
    <section
      style={{
        padding: '110px 24px',
        background: 'linear-gradient(180deg, #141010 0%, #0c0a08 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '14px',
            }}
          >
            How It Works
          </div>
          <h2 style={{ fontSize: '46px', fontWeight: 900, color: 'var(--fg)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            From craving to table in three steps
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.id}
              onMouseEnter={() => setHoveredId(step.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: 'relative',
                padding: '38px 30px',
                background: hoveredId === step.id ? 'rgba(255,122,26,0.06)' : 'var(--card)',
                border: '1px solid',
                borderColor: hoveredId === step.id ? 'rgba(255,122,26,0.3)' : 'var(--border)',
                borderRadius: '20px',
                transform: hoveredId === step.id ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '58px',
                  fontWeight: 900,
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #ff7a1a, #ffb347)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '18px',
                  opacity: 0.9,
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--fg)', marginBottom: '12px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '54px',
                    right: '-16px',
                    color: 'var(--accent)',
                    opacity: 0.5,
                    zIndex: 2,
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}