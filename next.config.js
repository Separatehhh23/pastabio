/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./src/utils/loadFonts.js')) {
          entries['main.js'].unshift('./src/utils/loadFonts.js');
        }
        return entries;
      };
    }
    return config;
  },
};
