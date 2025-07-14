import { style } from '@vanilla-extract/css';

export const tocNav = style({
  marginBottom: '2.5rem',
  position: 'sticky',
  top: '2rem',
  background: 'linear-gradient(120deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
  borderRadius: '1.2rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
  padding: '1.5rem 1.2rem',
  border: '1.5px solid var(--color-border, #31343c)',
  color: 'var(--color-text, #f5f6fa)',
  zIndex: 2,
});

export const tocList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const tocItem = style({
  margin: '0.7rem 0',
});

export const tocLink = style({
  cursor: 'pointer',
  color: 'var(--color-accent, #4FC3F7)',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.05rem',
  borderRadius: '0.5rem',
  padding: '0.3rem 0.7rem',
  transition: 'background 0.15s, color 0.15s',
  display: 'inline-block',
  ':hover': {
    background: 'var(--color-accent, #4FC3F7)',
    color: '#181a20',
    textDecoration: 'none',
  },
});
