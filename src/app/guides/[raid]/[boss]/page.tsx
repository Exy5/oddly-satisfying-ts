import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { components } from '@/app/components/mdxComponents';
import GuideContent from '@/app/components/Guides/GuideContent/GuideContent';

interface PageProps {
  params: Promise<{ raid: string; boss: string }>;
}

export default async function BossGuidePage({ params }: PageProps) {
  const { raid, boss } = await params;
  const filePath = path.join(process.cwd(), 'src', 'content', raid, `${boss}.mdx`);
  
  try {
    await fs.access(filePath);
  } catch {
    return notFound();
  }
  
  const source = await fs.readFile(filePath, 'utf8');
  const { content } = await compileMDX({
    source,
    components,
  });
  
  return (
    <GuideContent content={content} />
  );
}