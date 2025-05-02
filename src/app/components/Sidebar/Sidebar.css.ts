import { style } from '@vanilla-extract/css';

// Sidebar container style
export const sidebarStyle = style({
  width: '17%',  // Sidebar width
  background: 'linear-gradient(to right,rgb(29, 29, 29),rgb(49, 49, 49))',
  color: '#fff',  // White text color
  padding: '1rem',  // Padding for the sidebar
  flexDirection: 'column',  // Stack items vertically in the sidebar
  alignItems: 'flex-start',  // Align items to the left
  overflowY: 'auto',  // Allow scrolling if the sidebar content overflows
  borderRadius: '10px',
  marginLeft: '0.8rem',
  marginRight: '0.8rem',
  marginBottom: '0.8rem'
});
