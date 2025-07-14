import { style } from '@vanilla-extract/css';

export const videoEmbed = style({
  width: '100%',
  maxWidth: '800px',
  margin: '2.5rem auto',
  borderRadius: '1.2rem',
  overflow: 'hidden',
  boxShadow: '0 6px 32px 0 rgba(0,0,0,0.22)',
  background: 'var(--color-bg-alt, #23272f)',
  border: '1.5px solid var(--color-border, #31343c)',
});
