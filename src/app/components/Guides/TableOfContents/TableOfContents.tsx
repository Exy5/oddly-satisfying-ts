"use client";
import React from 'react';
import { tocNav, tocList, tocItem, tocLink } from './TableOfContents.css';
import { sectionTitle } from '../Section/Section.css';

interface TOCSection {
  id: string;
  title: string;
}

export default function TableOfContents({
  sections, 
  onSectionClick, 
  offset = 110 ,
  title
}: { 
  sections: TOCSection[]; 
  onSectionClick?: (id: string) => void;
  offset?: number;
  title?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      // Default smooth scroll behavior with offset
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      
      <nav className={tocNav}>
        {title &&  <h2 className={sectionTitle}>{title}</h2>}
        <ul className={tocList}>
          {sections.map(section => (
            <li key={section.id} className={tocItem}>
              <a
                href={`#${section.id}`}
                onClick={e => handleClick(e, section.id)}
                className={tocLink}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
