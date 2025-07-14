import { style } from '@vanilla-extract/css';

// Sidebar container style
export const sidebarStyle = style({
  width: '17%',
  background: 'linear-gradient(120deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
  color: 'var(--color-text, #f5f6fa)',
  padding: '1.5rem 1.2rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflowY: 'auto',
  borderRadius: '1.2rem',
  marginLeft: '1.2rem',
  marginRight: '1.2rem',
  marginBottom: '1.2rem',
  border: '1.5px solid var(--color-border, #31343c)',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
});
