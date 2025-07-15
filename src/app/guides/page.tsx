import fs from 'fs/promises';
import path from 'path';

import BackgroundVideo from '../components/Video/BackgroundVideo';
// import { guideContentContainer } from '../components/Guides/GuideContent/GuideContent.css';
import Section from '../components/Guides/Section/Section';
import BossButton from '../components/Guides/BossButton/BossButton';
import { raidCard, raidTitle, bossButtonList } from '../components/Guides/BossButton/RaidGuideLayout.css';

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
      <div style={{ margin: '2rem auto', padding: '2rem 3.7rem' }}>
        <div className={raidCard}>
          <h1 className={raidTitle}>Raid Guides</h1>
          {raids.map((raid) => (
            <Section key={raid.id} id={raid.id} title={raid.name}>
              <div className={bossButtonList}>
                {raid.bosses.map((boss) => (
                  <BossButton
                    key={boss.id}
                    href={`/guides/${raid.id}/${boss.id}`}
                    name={boss.name}
                    image={`/images/${raid.id}/${boss.id}.png`}
                  />
                ))}
              </div>
            </Section>
          ))}
        </div>
      </div>
    </>
  );
}
