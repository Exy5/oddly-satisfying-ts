import { style } from '@vanilla-extract/css';

export const spellContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.2rem', // tighter spacing
  margin: '0.1rem auto',
  background: 'none',
  border: 'none',
  padding: 0,
  boxSizing: 'border-box',
  alignItems: 'stretch', // ensure equal height
  justifyContent: 'flex-start',
});

// Each direct child (spell) gets 3 per row, but wider and same height
export const spellItem = style({
  flex: '1 1 0',
  minWidth: '350px', // minimum width for a spell card
  maxWidth: 'calc(33.333% - 0.5rem)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  minHeight: '120px', // force all spells to have the same minimum height
  height: '100%',
});
