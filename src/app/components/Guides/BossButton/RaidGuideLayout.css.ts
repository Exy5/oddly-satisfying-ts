import { style } from '@vanilla-extract/css';

export const raidCard = style({
  maxWidth: '900px',
  width: '100%',
  margin: '8.2rem auto 0 auto',
  padding: '2.2rem 2.5rem',
  background: 'linear-gradient(120deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
  borderRadius: '1.2rem',
  border: '1.5px solid var(--color-border, #31343c)',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
  color: 'var(--color-text, #f5f6fa)',
});

export const raidTitle = style({
  color: '#fff',
  fontSize: '2.2rem',
  fontWeight: 700,
  marginBottom: '2rem',
  letterSpacing: '0.02em',
  textShadow: '0 2px 8px #222',
});

export const bossButtonList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  width: '100%',
});
