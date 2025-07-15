import { style } from '@vanilla-extract/css';

export const spell = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  width: '100%',
  maxWidth: '900px',
  marginBottom: '1rem',
  background: 'linear-gradient(90deg, #23272f 60%, #181a20 100%)',
  color: '#fff',
  borderRadius: '1.1rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)',
  padding: '1.25rem 1.5rem',
  transition: 'box-shadow 0.2s, border-color 0.2s',
  border: '1.5px solid #23272f',
  boxSizing: 'border-box',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.35)',
    borderColor: '#4FC3F7',
  },
});

export const spellContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '1rem',
  lineHeight: 1.6,
});

export const spellImage = style({
  width: 64,
  height: 64,
  objectFit: 'cover',
  borderRadius: '0.7rem',
  boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
  background: '#23272f',
  border: '1px solid #31343c',
});
