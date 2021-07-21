import {
  addDecorator,
  addParameters,
  setCustomElements,
  withA11y,
} from '@open-wc/demoing-storybook';

async function run() {
  setCustomElements({});

  addDecorator(withA11y);

  addParameters({
    a11y: {
      config: {},
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
    docs: {
      iframeHeight: '200px',
    },
    languageSelector: {
      locales: ['en-GB', 'it-IT'],
    },
  });
}

run();
