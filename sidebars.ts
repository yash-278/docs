import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  getStartedSidebar: [{ type: 'autogenerated', dirName: '100-getting-started' }],
  ormSidebar: [{ type: 'autogenerated', dirName: '200-orm' }],
  accelerateSidebar: [{ type: 'autogenerated', dirName: '300-accelerate' }],
  pulseSidebar: [{ type: 'autogenerated', dirName: '400-pulse' }],
  platformSidebar: [{ type: 'autogenerated', dirName: '500-platform' }],
  aboutSidebar: [{ type: 'autogenerated', dirName: '600-about' }],
};

export default sidebars;