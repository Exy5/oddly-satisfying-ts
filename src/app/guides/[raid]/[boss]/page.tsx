// app/guides/[raid]/[boss]/page.tsx

import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/app/components/mdxComponents';
import GuideContent from '@/app/components/GuideContent';

export default async function BossGuidePage({ params }: { params: { raid: string; boss: string } }) {
  const filePath = path.join(process.cwd(), 'src', 'content', params.raid, `${params.boss}.mdx`);
  const source = await fs.readFile(filePath, 'utf8');

  const { content } = await compileMDX({
    source,
    components,
  });

  return <GuideContent content={content} />;
}
