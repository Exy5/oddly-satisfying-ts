import fs from 'fs/promises';
import path from 'path';
import Section from '../components/Guides/Section/Section';
import BossButton from '../components/Guides/BossButton/BossButton';
import { raidCard, raidTitle, bossButtonList } from '../components/Guides/BossButton/RaidGuideLayout.css';

const getBossOrder = (raidId: string, bossId: string): number => {
  const bossOrders: Record<string, Record<string, number>> = {
    'mogushan-vaults': {
      'the-stone-guard': 1,
      'feng-the-accursed': 2,
      'garajal-the-spiritbinder': 3,
      'the-spirit-kings': 4,
      'elegon': 5,
      'will-of-the-emperor': 6
    },
    'heart-of-fear': {
      'imperial-vizier-zorlok': 1,
      'blade-lord-tayak': 2,
      'garalon': 3,
      'wind-lord-meljarak': 4,
      'amber-shaper-unsok': 5,
      'grand-empress-shekzeer': 6
    },
    'terrace-of-endless-springs': {
      'protectors-of-the-endless': 1,
      'tsulong': 2,
      'lei-shi': 3,
      'sha-of-fear': 4
    }
  };
 
  return bossOrders[raidId]?.[bossId] || 999;
};

const getRaidOrder = (raidId: string): number => {
  const raidOrders: Record<string, number> = {
    'mogushan-vaults': 1,
    'heart-of-fear': 2,
    'terrace-of-endless-springs': 3
    // Add more raids as needed
  };
  
  return raidOrders[raidId] || 999;
};

export default async function GuidesHome() {
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
          .sort((a, b) => getBossOrder(raidId, a.id) - getBossOrder(raidId, b.id));
        
        return { id: raidId, name: raidName, bosses };
      })
  );

  // Sort raids by their defined order
  raids.sort((a, b) => getRaidOrder(a.id) - getRaidOrder(b.id));

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