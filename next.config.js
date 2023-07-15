module.exports = {
  reactStrictMode: true,
  env: {
    GPT4_API_KEY: process.env.GPT4_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
    }
    return config;
  },
};