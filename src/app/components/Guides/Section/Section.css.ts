import { style } from '@vanilla-extract/css';

export const section = style({
  marginBottom: '2.5rem',
  padding: '2.2rem 1.7rem',
  background: 'linear-gradient(120deg, var(--color-surface) 60%, var(--color-surface-alt) 100%)',
  borderRadius: '1.2rem',
  boxShadow: '0 6px 32px 0 rgba(0,0,0,0.22)',
  border: '1.5px solid var(--color-border)',
  color: 'var(--color-text)',
});

export const sectionTitle = style({
  fontSize: '1.35rem',
  fontWeight: 700,
  marginBottom: '0.7rem',
  color: 'var(--color-accent)',
  letterSpacing: '0.01em',
});
