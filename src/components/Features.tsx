import React, { useState } from 'react';

const Icons = {
  Leaf: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  ),
  Flame: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    </svg>
  ),
  Truck: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  Chef: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  ),
  Clock: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Heart: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  ),
};

export default function Features() {
  const [hoveredId, setHoveredId] = useState(null);

  const features = [
    {
      id: 'f1',
      Icon: Icons.Leaf,
      title: 'Farm-Direct Sourcing',
      description: 'We partner with 120+ local growers so every plate starts with produce picked at peak ripeness — never frozen, never shipped across oceans.',
      featured: true,
    },
    {
      id: 'f2',
      Icon: Icons.Flame,
      title: 'Cooked Over Open Flame',
      description: 'Our chefs fire-roast, grill, and smoke each dish for depth you can taste. That signature char is what earns us 4.9 stars.',
    },
    {
      id: 'f3',
      Icon: Icons.Truck,
      title: '30-Minute Delivery',
      description: 'Insulated ember-boxes keep your meal hot in transit. Track your rider live from kitchen to doorstep.',
    },
    {
      id: 'f4',
      Icon: Icons.Chef,
      title: 'Chef-Designed Menus',
      description: 'Seasonal menus curated by award-winning chefs and refreshed every week so you never eat the same thing twice.',
    },
    {
      id: 'f5',
      Icon: Icons.Clock,
      title: 'Schedule or On-Demand',
      description: 'Order now or plan your whole week. Set recurring deliveries and skip the grocery run for good.',
    },
    {
      id: 'f6',
      Icon: Icons.Heart,
      title: 'Diet-Friendly Options',
      description: 'Filter by vegan, gluten-free, keto, or high-protein. Full nutrition and allergen info on every single item.',
    },
  ];

  return (
    <section style={{ padding: '110px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
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
            Why Ember& Root
          </div>
          <h2 style={{ fontSize: '46px', fontWeight: 900, color: 'var(--fg)', letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.05 }}>
            Food that tastes like it was made for you
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: 1.6 }}>
            From the soil to the sizzle to your front door — everything we do is
            built around flavor, freshness, and getting it to you fast.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {features.map((f) => (
            <div
              key={f.id}
              onMouseEnter={() => setHoveredId(f.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                gridColumn: f.featured ? 'span 1' : 'span 1',
                padding: '34px',
                background:
                  hoveredId === f.id
                    ? 'linear-gradient(160deg, rgba(255,122,26,0.08) 0%, rgba(255,122,26,0.02) 100%)'
                    : f.featured
                    ? 'linear-gradient(160deg, rgba(230,57,70,0.06) 0%, var(--card) 100%)'
                    : 'var(--card)',
                border: '1px solid',
                borderColor: hoveredId === f.id ? 'rgba(255, 122, 26, 0.35)' : 'var(--border)',
                borderRadius: '20px',
                transform: hoveredId === f.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredId === f.id ? '0 20px 44px rgba(0,0,0,0.35)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255,122,26,0.18), rgba(255,179,71,0.1))',
                  border: '1px solid rgba(255, 122, 26, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-2)',
                  marginBottom: '20px',
                }}
              >
                <f.Icon />
              </div>
              <h3 style={{ fontSize: '21px', fontWeight: 700, color: 'var(--fg)', marginBottom: '10px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}