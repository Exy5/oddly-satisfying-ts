"use client";
import React from 'react';
import { tocNav, tocList, tocItem, tocLink } from './TableOfContents.css';

interface TOCSection {
  id: string;
  title: string;
}

export default function TableOfContents({ sections, onSectionClick }: { sections: TOCSection[]; onSectionClick?: (id: string) => void }) {
  return (
    <nav className={tocNav}>
      <ul className={tocList}>
        {sections.map(section => (
          <li key={section.id} className={tocItem}>
            <a
              href={`#${section.id}`}
              onClick={e => {
                if (onSectionClick) {
                  e.preventDefault();
                  onSectionClick(section.id);
                }
              }}
              className={tocLink}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
