import React from 'react';
import { spellContainer } from './SpellContainer.css';

export default function SpellContainer({ children }: { children: React.ReactNode }) {
  return <div className={spellContainer}>{children}</div>;
}
