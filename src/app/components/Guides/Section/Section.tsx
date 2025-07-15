"use client";
import React from 'react';
import { section, sectionTitle } from './Section.css';

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className={section}>
      <h2 className={sectionTitle}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
