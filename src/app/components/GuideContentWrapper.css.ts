import { style } from '@vanilla-extract/css';

export const GuideContentWrapper = style({
  background: 'rgb(60, 60, 60)',    // same background as header inner div
  minHeight: '4.4rem',               // same minHeight as header
  position: 'relative',
  boxSizing: 'border-box',
  margin: '0rem 2.9rem',             // top/bottom 0.8rem, left/right 2rem (match header padding + margin combined)
  borderRadius: '10px',
  padding: '1rem',                   // add some padding inside for your content spacing
  display: 'flex',
  flexDirection: 'column',           // if you want vertical stacking inside
  border: '1px solid black',
});