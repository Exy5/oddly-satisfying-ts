import { style } from '@vanilla-extract/css';

export const bossButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  minHeight: '84px',
  margin: '0.7rem 0',
  padding: '1.2rem 1.5rem',
  background: 'linear-gradient(120deg, #23272f 60%, #31343c 100%)',
  border: '2px solid #4FC3F7',
  borderRadius: '1.1rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.15rem',
  letterSpacing: '0.01em',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'box-shadow 0.18s, border-color 0.18s',
  textShadow: '0 2px 8px #181a20',
  ':hover': {
    boxShadow: '0 8px 32px 0 rgba(79,195,247,0.18)',
    borderColor: '#81d4fa',
    color: '#4FC3F7',
    textDecoration: 'none',
  },
});

export const bossButtonImage = style({
  width: '56px',
  height: '56px',
  objectFit: 'cover',
  borderRadius: '0.7rem',
  marginRight: '1.2rem',
  flexShrink: 0,
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
  border: '2px solid #31343c',
  background: '#23272f',
});

export const bossButtonText = style({
  position: 'relative',
  zIndex: 1,
  textAlign: 'left',
  width: '100%',
  fontSize: '1.15rem',
  fontWeight: 600,
  letterSpacing: '0.01em',
});
