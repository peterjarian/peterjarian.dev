import { createEnv } from '@t3-oss/env-nextjs';
import z from 'zod';

export const env = createEnv({
  client: {},
  server: {
    APP_VERSION: z.string(),
  },
  runtimeEnv: {
    APP_VERSION: process.env.APP_VERSION,
  },
});
