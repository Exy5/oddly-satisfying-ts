
import fs from 'fs/promises';
import path from 'path';
import BackgroundVideo from '../components/Video/BackgroundVideo';
import { guideContentContainer } from '../components/Guides/GuideContent/GuideContent.css';
import Link from 'next/link';

export default async function GuidesHome() {
  // Dynamically read raids and bosses from the filesystem
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const raidDirs = await fs.readdir(contentDir, { withFileTypes: true });
  const raids = await Promise.all(
    raidDirs
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const raidId = dirent.name;
        const raidName = raidId
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        const bossesDir = path.join(contentDir, raidId);
        const bossFiles = await fs.readdir(bossesDir);
        const bosses = bossFiles
          .filter((file) => file.endsWith('.mdx'))
          .map((file) => {
            const bossId = file.replace(/\.mdx$/, '');
            const bossName = bossId
              .split('-')
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' ');
            return { id: bossId, name: bossName };
          });
        return { id: raidId, name: raidName, bosses };
      })
  );
  return (
    <>
      <BackgroundVideo />
      <div className={guideContentContainer}>
        <div
          style={{
            maxWidth: '900px',
            width: '100%',
            margin: '6.2rem auto 0 auto',
            padding: '2.2rem 2.5rem',
            background: 'linear-gradient(120deg, var(--color-bg-alt, #23272f) 60%, var(--color-surface-alt, #282c34) 100%)',
            borderRadius: '1.2rem',
            border: '1.5px solid var(--color-border, #31343c)',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
            color: 'var(--color-text, #f5f6fa)',
          }}
        >
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '0.02em', textShadow: '0 2px 8px #222' }}>
            Raid Guides
          </h1>
          {raids.map((raid) => (
            <div key={raid.id} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#4FC3F7', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em' }}>{raid.name}</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                {raid.bosses.map((boss) => (
                  <li key={boss.id} style={{ marginBottom: '0.4rem' }}>
                    <Link style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500, transition: 'color 0.2s' }} href={`/guides/${raid.id}/${boss.id}`}>
                      {boss.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#4FC3F7', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em' }}>Component Showcase</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
              <li>
                <Link style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500, transition: 'color 0.2s' }} href="/guides/test/test-all-components">
                  All Guide Components (test-all-components)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
