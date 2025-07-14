import { style } from '@vanilla-extract/css';

export const videoContainer = style({
  top: 0,
  left: 0,
  position: 'fixed',
  width: '100vw',
  height: '100vh', // Always full viewport height
  overflow: 'hidden',
  zIndex: -1,
  pointerEvents: 'none',
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
  height: '28vh',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(24,26,32,0.92) 90%, rgba(24,26,32,1) 100%)',
  pointerEvents: 'none',
})