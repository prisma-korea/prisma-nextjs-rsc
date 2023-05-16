const withPWA = require('next-pwa')({
  // https://github.com/GoogleChrome/workbox/issues/1790#issuecomment-620894023
  disable: process.env.NODE_ENV !== 'production',
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
  swcMinify: true,
  reactStrictMode: true,
  experimental: {appDir: true},
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=3600, stale-while-revalidate=300',
          },
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
