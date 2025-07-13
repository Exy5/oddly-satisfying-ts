import { MDXComponents } from 'mdx/types'; // auto-import may not find this
import VideoEmbed from './VideoEmbed';
import Phase from './Phase';
import Mechanic from './Mechanic';

export const components: MDXComponents = {
  VideoEmbed,
  Phase,
  Mechanic,
  h1: (props) => <h1 className="text-3xl font-bold my-6" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-4" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
};
