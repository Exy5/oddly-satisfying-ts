// Mechanic.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  marginBottom: '1rem',
  padding: '1rem',
  border: '1px solid #cbd5e0',
  borderRadius: '8px',
  backgroundColor: '#f1f5f9',
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
});

export const imageWrapper = style({
  position: 'relative', // ← This is required
  width: '100%',
  height: '200px',
  marginTop: '0.5rem',
  borderRadius: '8px',
  overflow: 'hidden',
});

export const image = style({
  objectFit: 'cover',
});
