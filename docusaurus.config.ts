import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Theory to Embodiment - A Comprehensive Capstone Course',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://danii9790.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Physical-AI-Humanoid-Robotics-Book/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Danii9790', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics-Book', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Make docs the homepage
          editUrl: 'https://github.com/Danii9790/Physical-AI-Humanoid-Robotics-Book/tree/main/',
        },
        blog: false, // Disable blog for this course site
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/robotics-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Course Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'courseSidebar',
          position: 'left',
          label: 'Course',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          href: 'https://github.com/Danii9790/Physical-AI-Humanoid-Robotics-Book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Weekly Schedule',
              to: '/course-structure/weekly-schedule',
            },
            {
              label: 'Assessments',
              to: '/course-structure/assessments',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'ROS 2 Fundamentals',
              to: '/module-01-ros2/overview',
            },
            {
              label: 'Digital Twins',
              to: '/module-02-digital-twins/overview',
            },
            {
              label: 'NVIDIA Isaac Sim',
              to: '/module-03-isaac-sim/overview',
            },
            {
              label: 'VLA Systems',
              to: '/module-04-vla-systems/overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Hardware Architecture',
              to: '/hardware-architecture/overview',
            },
            {
              label: 'Glossary',
              to: '/reference/glossary',
            },
            {
              label: 'Bibliography',
              to: '/reference/bibliography',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
