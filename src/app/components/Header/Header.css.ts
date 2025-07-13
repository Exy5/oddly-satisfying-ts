import { style } from '@vanilla-extract/css';

export const HeaderMainContentStyle = style({
  background: 'rgb(60, 60, 60)',
  minHeight: '4.4rem',
  position: 'relative',
  boxSizing: 'border-box',
  margin: '0.8rem',
  display: 'flex',
  borderRadius: '10px',
});

export const HeaderStyle = style({
  display: 'block',
  position: 'fixed',
  width: '100%',
  zIndex: '10',
  boxSizing: 'border-box',
  padding: '0 2rem',  // horizontal padding 2rem
});

export const  HeaderLogoContainerStyle = style({
  background: 'linear-gradient(to right,rgb(30,30,30), rgb(60,60,60))',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'cnter',
  padding: '0.6rem 1rem',
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
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
  marginLeft: '5rem'
})

export const HeaderMenuItemStyle = style({
  borderRadius: '0.5rem',
  fontSize: '14px',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: '#707070', // light grey box on hover
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // soft shadow
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