import { style } from "@vanilla-extract/css";

export const sidebarButtonStyle = style({
  color: 'var(--color-text, #f5f6fa)',
  textDecoration: 'none',
  border: '2px solid var(--color-accent, #4FC3F7)',
  borderRadius: '0.9rem',
  padding: '0.7rem 1.2rem',
  marginTop: '0.3rem',
  marginBottom: '0.3rem',
  display: 'block',
  minWidth: '100%',
  fontWeight: 600,
  fontSize: '1rem',
  background: 'transparent',
  transition: 'background 0.15s, color 0.15s, border-color 0.15s',
  ':hover': {
    background: 'var(--color-accent, #4FC3F7)',
    color: '#181a20',
    borderColor: 'var(--color-wow-blue, #00b4ff)',
    cursor: 'pointer',
  },
});