
import Link from "next/link";
import BackgroundVideo from "../components/Video/BackgroundVideo";
import fs from 'fs/promises';
import path from 'path';


export default async function GuidesHome() {
  // Dynamically read raids and bosses from the filesystem
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const raidDirs = await fs.readdir(contentDir, { withFileTypes: true });
  const raids = await Promise.all(
    raidDirs
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const raidId = dirent.name;
        // Try to get a readable name from the folder, fallback to id
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
            // Try to get a readable name from the file, fallback to id
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
      <div
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '2.5rem 2rem 2rem 2rem',
          background: 'rgb(60, 60, 60)',
          borderRadius: '10px',
          border: '1px solid black',
          marginTop: '6.2rem', // header height (4.4rem) + margin (0.8rem) + some extra
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)',
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
    </>
  );
}
