"use client";

import React from 'react';
import Image from 'next/image';
import { spell, spellContent, spellImage } from './Spell.css';
export default function Spell({ title, image, children }: { title: string; image: string; children: React.ReactNode }) {
  return (
    <div className={spell}>
      <Image
        src={image}
        alt={title}
        width={64}
        height={64}
        className={spellImage}
      />
      <div className={spellContent}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
