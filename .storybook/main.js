module.exports = {
  stories: ['../packages/**/stories/**/*.stories.{js,md,mdx}'],
  addons: [
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-links/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
  ],
  esDevServer: {
    // custom es-dev-server options
    nodeResolve: true,
    watch: true,
    open: true,
  },
};
