// components/GuideContent.tsx
'use client';

import React from 'react';
import { GuideContentWrapper } from './GuideContentWrapper.css';
import BackgroundVideo from './Video/BackgroundVideo';

export default function GuideContent({ content }: { content: React.ReactNode }) {
  return  (
  <main>
    <BackgroundVideo/>
    <div className={GuideContentWrapper}>
      {content}
    </div>
  </main>
  );
}
