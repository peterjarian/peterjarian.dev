import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

import { version } from './package.json';

const nextConfig: NextConfig = {
  typedRoutes: true,
  env: {
    APP_VERSION: version,
  },
};

export default withContentlayer(nextConfig);
