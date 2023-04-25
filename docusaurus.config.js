// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const tailwindPlugin = require("./plugins/tailwind-plugin.cjs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AIBaseTool Learning Prompt",
  tagline: "AIBaseTool Prompt Engineering 教程",
  url: "https://prompt.aibasetool.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ailogo.png",
  organizationName: "Jiyr0119",
  // projectName: 'Learning-prompt.github.io',
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "AIBaseTool Learning Prompt",
        logo: {
          alt: "Learning Prompt logo",
          src: "img/ailogo.png",
        },
        items: [
          // todo: multiple version config
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          // },

          // {
          //   type: 'doc',
          //   docId: '👋 Welcome',
          //   position: 'left',
          //   label: '👋 欢迎',
          // },
          {
            type: "doc",
            docId: "chatgpt-learning-path",
            position: "left",
            label: "💬 ChatGPT 教程",
          },
          {
            type: "doc",
            position: "left",
            docId: "midjourney-learning-path",
            label: "🖼️ Midjourney 教程",
          },
          // {to: '/blog', label: '📰 博客', position: 'left'},
          {
            href: "https://aibasetool.com",
            label: "🏠 AIBaseTool",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
};

module.exports = config;
