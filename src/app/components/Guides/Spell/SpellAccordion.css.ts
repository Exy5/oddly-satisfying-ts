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
  userSelect: 'none',
  position: 'relative',
  minHeight: '64px',
});

export const spellExpanded = style({
  borderColor: '#4FC3F7',
  boxShadow: '0 0 0 4px rgba(79,195,247,0.18)',
});

export const spellContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'inherit',
  fontSize: '1rem',
  lineHeight: 1.6,
  minHeight: 64,
  position: 'relative',
});

export const spellImage = style({
  width: 64,
  height: 64,
  objectFit: 'cover',
  borderRadius: '0.7rem',
  boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
  background: '#23272f',
  border: '1px solid #31343c',
  alignSelf: 'center',
  flexShrink: 0,
});

export const spellTitle = style({
  fontWeight: 600,
  fontSize: '1.1rem',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 64,
});

export const spellChevronWrapper = style({
  position: 'absolute',
  left: '50%',
  bottom: '-10px',
  transform: 'translateX(-50%)',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  background: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
});

export const spellChevron = style({
  fontSize: '1.3rem',
  transition: 'transform 0.2s',
  userSelect: 'none',
  color: '#4FC3F7',
});

export const spellChevronOpen = style({
  transform: 'rotate(90deg)',
});

export const spellDescriptionWrapper = style({
  width: '100%',
  overflow: 'hidden',
  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s',
  background: 'linear-gradient(90deg, #4FC3F7 0%, #23272f 60%, #444851 100%)',
  borderRadius: '0 0 1.1rem 1.1rem',
  marginTop: '1rem',
  boxSizing: 'border-box',
});

export const spellDescriptionInner = style({
  padding: '1rem 1.5rem',
  color: '#fff',
  fontSize: '1rem',
  textAlign: 'center',
});
