import { MDXComponents } from 'mdx/types'; // auto-import may not find this

import VideoEmbed from '@/app/components/Guides/VideoEmbed/VideoEmbed';
import Phase from '@/app/components/Guides/Phase/Phase';
import Mechanic from './Guides/Mechanic/Mechanic';
import Section from './Guides/Section/Section';
import SpellContainer from './Guides/SpellContainer/SpellContainer';
import Spell from './Guides/Spell/Spell';
import TableOfContents from './Guides/TableOfContents/TableOfContents';

export const components: MDXComponents = {
  VideoEmbed,
  Phase,
  Mechanic,
  Section,
  SpellContainer,
  Spell,
  TableOfContents,
  h1: (props) => <h1 className="text-3xl font-bold my-6" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-4" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
};
