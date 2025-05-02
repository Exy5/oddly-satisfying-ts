import { style } from "@vanilla-extract/css";

export const sidebarButtonStyle = style({
  color: '#fff',  // White text color for links
  textDecoration: 'none',  // Remove underline from links
  border: '3px solid #000',
  borderRadius:'10px',
  padding: '0.5rem 1rem',  // Padding for each link
  marginTop: '0.2rem',
  marginBottom: '0.2rem',
  display: 'block',  // Make the link fill the entire width of the sidebar
  minWidth: '100%',  // Ensure the link stretches across the sidebar
  ':hover': {
    backgroundColor: '#444',  // Change background on hover
  }
});