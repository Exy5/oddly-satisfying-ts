
import { style } from '@vanilla-extract/css';

export const guideContentContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
});

export const guideContent = style({
  background: 'linear-gradient(120deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
  borderRadius: '1.2rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
  padding: '2.2rem 2.5rem',
  margin: '3.7rem',
  width: '100%',
  color: 'var(--color-text, #f5f6fa)',
  position: 'relative',
  border: '1.5px solid var(--color-border, #31343c)',
  transition: 'box-shadow 0.2s, border-color 0.2s',
});
