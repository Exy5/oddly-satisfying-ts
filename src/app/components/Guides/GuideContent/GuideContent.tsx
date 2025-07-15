"use client";

import React from 'react';
import { guideContent, guideContentContainer } from '@/app/components/Guides/GuideContent/GuideContent.css';

export default function GuideContent({ content }: { content: React.ReactNode }) {
  return (
    <div className={guideContentContainer}>
      <div className={guideContent}>
        {content}
      </div>
    </div>
  );
}
