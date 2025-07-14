import { style } from '@vanilla-extract/css';

export const videoContainer = style({
  top: 0,
  left: 0,
  position: 'absolute',
  minWidth: '100%',
  height: '80%',     // You control height here
  overflow: 'hidden',  // Hide any overflow
  margin: 'auto', // Center horizontally
  borderRadius: '1rem',
  zIndex: -1,
});

export const videoStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures the video covers container nicely
});

export const gradientOverlay = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '20%',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
  pointerEvents: 'none',
})