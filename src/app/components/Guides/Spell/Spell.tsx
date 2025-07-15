"use client";

import React, { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import {
  spell,
  spellExpanded,
  spellContent,
  spellImage,
  spellTitle,
  spellChevronWrapper,
  spellChevron,
  spellChevronOpen,
  spellDescriptionWrapper,
  spellDescriptionInner,
} from './SpellAccordion.css';

export default function Spell({ title, image, children }: { title: string; image: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const [maxHeight, setMaxHeight] = useState('0px');

  useLayoutEffect(() => {
    if (open && descRef.current) {
      setMaxHeight(descRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  return (
    <div
      className={open ? `${spell} ${spellExpanded}` : spell}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(v => !v); }}
      style={{ outline: 'none', position: 'relative' }}
    >
      <Image
        src={image}
        alt={title}
        width={64}
        height={64}
        className={spellImage}
      />
      <div className={spellContent}>
        <div className={spellTitle}>{title}</div>
        <div
          className={spellChevronWrapper}
          tabIndex={-1}
          aria-hidden
          onClick={e => { e.stopPropagation(); setOpen(v => !v); }}
        >
          <span className={open ? `${spellChevron} ${spellChevronOpen}` : spellChevron}>▶</span>
        </div>
        <div
          className={spellDescriptionWrapper}
          style={{ maxHeight, transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s' }}
          aria-hidden={!open}
        >
          <div ref={descRef} className={spellDescriptionInner} style={{ opacity: open ? 1 : 0, transition: 'opacity 0.2s' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
