import { style } from '@vanilla-extract/css';

export const spellContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  margin: '1.5rem auto',
  background: 'none',
  border: 'none',
  padding: 0,
  boxSizing: 'border-box',
  alignItems: 'flex-start',
  maxWidth: '900px',
  justifyContent: 'flex-start',
});
