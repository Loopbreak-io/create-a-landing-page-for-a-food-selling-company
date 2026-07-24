import React, { useState } from 'react';

export default function Stats() {
  const [hoveredId, setHoveredId] = useState(null);

  const stats = [
    { id: 's1', value: '1.2M+', label: 'Meals delivered' },
    { id: 's2', value: '120+', label: 'Local partner farms' },
    { id: 's3', value: '30 min', label: 'Average delivery' },
    { id: 's4', value: '98%', label: 'Reorder rate' },
  ];

  return (
    <section
      style={{
        padding: '72px 24px',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            onMouseEnter={() => setHoveredId(stat.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              textAlign: 'center',
              padding: '28px 18px',
              background: hoveredId === stat.id ? 'rgba(255, 122, 26, 0.06)' : 'var(--card)',
              border: '1px solid',
              borderColor: hoveredId === stat.id ? 'rgba(255, 122, 26, 0.3)' : 'var(--border)',
              borderRadius: 'var(--radius)',
              transform: hoveredId === stat.id ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '42px',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ff7a1a 0%, #ffb347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--muted)',
                marginTop: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}