import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.ARABIC, Locales.TIGRINYA],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;

