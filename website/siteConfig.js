/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs who inspires us a lot.
const pioneers = [
	{
		caption: 'Aragon',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/image.jpg'.
		image: 'https://assets.website-files.com/5e997428d0f2eb13a90aec8c/5e99778310343ed2dfe89331_logo_big.svg',
		infoLink: 'https://aragon.org/',
		pinned: true,
	},
	{
		caption: '1Hive',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/image.jpg'.
		image: 'https://1hive.org/content/images/2020/05/1Hive-Logo-4.png',
		infoLink: 'https://1hive.org/',
		pinned: true,
	}
];

const siteConfig = {
	title: 'baby-degu', // Title for your website.
	tagline: "Let's maximize the Goodness in everyone",
	url: 'https://baby-degu.github.io', // Your website URL
	baseUrl: '/docusaurus/', // Base URL for your project */

	// For github.io type URLs, you would set the url and baseUrl like:
	//   url: 'https://facebook.github.io',
	//   baseUrl: '/test-site/',

	// Used for publishing and more
	projectName: 'docusaurus',
	organizationName: 'baby-degu',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ doc: 'qiita', label: 'Docs' },
		{ doc: 'dao', label: 'DAO' },
		{ page: 'pioneers', label: 'Pioneers' },
		{ href: 'https://github.com/baby-degu/docusaurus', label: 'Github', external: true },
		{ blog: true, label: 'Blog' },
	],

	// Adding pioneers who inspired us.
	pioneers,

	/* path to images for header/footer */
	headerIcon: '',
	footerIcon: '',
	favicon: 'img/favicon.ico',

	/* Colors for website */
	colors: {
		primaryColor: '#5e2e0a',
		secondaryColor: '#412007',
	},

	/* Custom fonts for website */
	/*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} baby-degu`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default',
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: ['https://buttons.github.io/buttons.js'],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,

	// Open Graph and Twitter card images.
	twitter: true,
	twitterUsername: 'babydegu',
	ogImage: 'img/baby-degu.jpg',
	twitterImage: 'img/baby-degu.jpg',

	// For sites with a sizable amount of content, set collapsible to true.
	// Expand/collapse the links and subcategories under categories.
	// docsSideNavCollapsible: true,

	// Show documentation's last contributor's name.
	enableUpdateBy: true,

	// Show documentation's last update time.
	enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	repoUrl: 'https://github.com/baby-degu/docusaurus',

	// Add cname
	cname: 'babydegu.com'
};

module.exports = siteConfig;
