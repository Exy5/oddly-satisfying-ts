import { style } from '@vanilla-extract/css';

export const section = style({
  marginBottom: '2rem',
  padding: '1.5rem 1.2rem',
  background: 'linear-gradient(135deg, #232323 60%, #30343a 100%)',
  borderRadius: '14px',
  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)',
  border: '1px solid #333',
});

export const sectionTitle = style({
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
});
