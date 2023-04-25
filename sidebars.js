/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  welcome: [
    '👋 Welcome',
    // {
    //   type: 'category',
    //   label: '💡 感悟 & 实践',
    //   link: {
    //     type: 'generated-index',
    //     description: "主要分享我个人的感悟和实践。",
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated', 
    //       dirName: 'insight',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '📚 资料 & 产品推荐',
    //   link: {
    //     type: 'generated-index',
    //     description: "汇集各种我个人认为不错的资料和产品。",
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated', 
    //       dirName: 'recommend',
    //     },
    //   ],
    // },
    // '🥰 感谢',
  ],
  chatGPT: [
    'chatgpt-learning-path',
    {
      type: 'category',
      label: '😎 基础篇',
      link: {
        type: 'generated-index',
        description: "如果你对 AI 和 Prompt Engineering 不是很了解，建议你从基础篇开始读起。如果你已经了解基本的用法，那可以直接跳去高级篇阅读。",
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'chatGPT/tutorial-basics',
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 高级篇',
      link: {
        type: 'generated-index',
        description: "高级篇内容相对比较难，如果你对 AI 及 PE 还不是很了解建议先完成基础篇的阅读。",
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'chatGPT/tutorial-extras',
        },
      ],
    },
    {
      type: 'category',
      label: '🗒️ 技巧篇',
      link: {
        type: 'generated-index',
        description: "这里汇总了所有 prompt 技巧，方便各位查阅。如果你已经看过基础篇和高级篇内容，就仅需要从技巧 9 开始看即可。",
      },
      items: [
        {
          type: 'autogenerated', 
          dirName: 'chatGPT/tutorial-tips',
        },
      ],
    },
    
    
  ],
  midjourney: [
    'midjourney-learning-path',
    {
      type: 'autogenerated', 
      dirName: 'midjourney',
    },
  ],
};

module.exports = sidebars;
