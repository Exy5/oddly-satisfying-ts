import fs from 'fs/promises';
import path from 'path';

import Section from '../components/Guides/Section/Section';
import BossButton from '../components/Guides/BossButton/BossButton';
import { raidCard, raidTitle, bossButtonList } from '../components/Guides/BossButton/RaidGuideLayout.css';

// Add this function before your component
const getBossOrder = (raidId: string, bossId: string): number => {
  const bossOrders: Record<string, Record<string, number>> = {
    'mogushan-vaults': {
      'the-stone-guard': 1,
      'feng-the-accursed': 2,
      'garajal-the-spiritbinder': 3,
      'the-spirit-kings': 4,
      'elegon': 5,
      'will-of-the-emperor': 6
      // Add more bosses for this raid
    },
    'raid-2': {
      'boss-a': 1,
      'boss-b': 2,
      'boss-c': 3,
      // Add more bosses for this raid
    },
    // Add more raids as needed
  };
  
  return bossOrders[raidId]?.[bossId] || 999; // Default to end if not found
};

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
          })
          .sort((a, b) => getBossOrder(raidId, a.id) - getBossOrder(raidId, b.id)); // Add this line

        return { id: raidId, name: raidName, bosses };
      })
  );
  return (
    <>
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