// app/guides/[raid]/[boss]/page.tsx

import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/app/components/mdxComponents';
import GuideContent from '@/app/components/Guides/GuideContent/GuideContent';

export default async function BossGuidePage({ params }: { params: Promise<{ raid: string; boss: string }> }) {
  const { raid, boss } = await params;
  const filePath = path.join(process.cwd(), 'src', 'content', raid, `${boss}.mdx`);
  const source = await fs.readFile(filePath, 'utf8');

  const { content } = await compileMDX({
    source,
    components,
  });

  return (
    <GuideContent content={content} />
  );
}
