import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  client: {},
  server: {
    NOTION_TOKEN: z.string(),
    APP_VERSION: z.string(),
  },
  runtimeEnv: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    APP_VERSION: process.env.APP_VERSION,
  },
});
