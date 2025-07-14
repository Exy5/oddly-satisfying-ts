import { style } from '@vanilla-extract/css';

export const HeaderMainContentStyle = style({
  background: 'linear-gradient(90deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
  minHeight: '4.4rem',
  position: 'relative',
  boxSizing: 'border-box',
  margin: '1.2rem',
  display: 'flex',
  borderRadius: '1.2rem',
  border: '1.5px solid var(--color-border, #31343c)',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
});

export const HeaderStyle = style({
  display: 'block',
  position: 'fixed',
  width: '100%',
  zIndex: '10',
  boxSizing: 'border-box',
  padding: '0 2.5rem',
  background: 'transparent',
});

export const HeaderLogoContainerStyle = style({
  background: 'linear-gradient(90deg, #181a20 60%, #23272f 100%)',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '0.7rem 1.2rem',
  borderTopLeftRadius: '1.2rem',
  borderBottomLeftRadius: '1.2rem',
})


export const HeaderLogoStyle = style({
  display: 'inline-block',
  outline: 0,
  position: 'relative',
  transition: 'all .1s ease-in',
  maxWidth: '8rem',
  maxHeight: '3.2rem',
  filter: 'invert(1)',
  selectors: {
    '&:hover': {
      filter: 'invert(0.8)'
    }
  }
})

export const HeaderMenuStyle = style({
  alignItems: 'center',
  justifyContent: 'space-around',
  display: 'flex',
  width: '60%',
  flexDirection: 'row',
  marginLeft: '5rem',
})

export const HeaderMenuItemStyle = style({
  borderRadius: '0.7rem',
  fontSize: '1rem',
  fontWeight: '600',
  padding: '0.6rem 1.3rem',
  textTransform: 'uppercase',
  color: 'var(--color-text)',
  background: 'transparent',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  selectors: {
    '&:hover': {
      background: 'var(--color-accent, #4FC3F7)',
      color: '#181a20',
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)',
      cursor: 'pointer',
    },
  }
})

export const discordLinkStyle = style({
  marginLeft: 'auto',
  marginRight: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

// Discord Logo Styling
export const discordLogoStyle = style({
  width: '2rem',  // Size of the logo
  height: 'auto',
  transition: 'all 0.2s ease-in',
  selectors: {
    '&:hover': {
      transform: 'scale(1.2)',
      filter: 'invert(0.2)' // Slight zoom effect on hover
    },
  },
});