"use client";
import React, { ReactNode } from 'react';
import { spellContainer, spellItem } from './SpellContainer.css';

type SpellContainerProps = {
  children: ReactNode;
};

export default function SpellContainer({ children }: SpellContainerProps) {
  return (
    <div className={spellContainer}>
      {React.Children.map(children, child => (
        <div className={spellItem}>{child}</div>
      ))}
    </div>
  );
}
