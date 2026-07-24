import React, { useState } from 'react';

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);

  const reviews = [
    {
      id: 't1',
      quote:
        'I cancelled my grocery subscription and never looked back. The flame-grilled chicken bowl tastes like a restaurant made it — because a chef did. Fastest delivery in the city, too.',
      name: 'Marcus Delgado',
      role: 'Software Engineer',
      company: 'Austin, TX',
    },
    {
      id: 't2',
      quote:
        'As a busy parent, Ember& Root gives me my evenings back. The kids devour the seasonal menus and I love knowing exactly which farm my veggies came from.',
      name: 'Priya Raman',
      role: 'Pediatric Nurse',
      company: 'Seattle, WA',
    },
    {
      id: 't3',
      quote:
        'Every dietary filter I need is right there — gluten-free, high-protein, done. The nutrition labels are spot-on and the food actually tastes indulgent. Rare combo.',
      name: 'Elena Boström',
      role: 'Fitness Coach',
      company: 'Denver, CO',
    },
  ];

  return (
    <section style={{ padding: '110px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            Loved by thousands
          </div>
          <h2 style={{ fontSize: '46px', fontWeight: 900, color: 'var(--fg)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Don’t just take our word for it
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              onMouseEnter={() => setHoveredId(r.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '34px',
                background: hoveredId === r.id ? 'rgba(255,122,26,0.05)' : 'var(--card)',
                border: '1px solid',
                borderColor: hoveredId === r.id ? 'rgba(255,122,26,0.3)' : 'var(--border)',
                borderRadius: '20px',
                transform: hoveredId === r.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredId === r.id ? '0 18px 40px rgba(0,0,0,0.35)' : 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: '3px', marginBottom: '18px' }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#ffb347" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--fg)',
                  margin: '0 0 26px',
                  flex: 1,
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 400,
                }}
              >
                “{r.quote}”
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff7a1a, #ffb347)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#1a1512',
                    fontSize: '17px',
                  }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--fg)' }}>{r.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted-2)' }}>
                    {r.role} · {r.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}