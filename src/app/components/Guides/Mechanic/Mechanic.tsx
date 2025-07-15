"use client";
import React from 'react';
import * as styles from './Mechanic.css';

export default function Mechanic({ title, children, image }: { title: string; children: React.ReactNode; image?: string }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div>{children}</div>
      {/* Optionally support image prop for future use */}
      {image && (
        <div className={styles.imageWrapper}>
          {/* You can add Next.js Image here if needed */}
        </div>
      )}
    </div>
  );
}
