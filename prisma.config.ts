import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // The CLI (migrate/studio/db push) always uses the direct, unpooled
    // connection. The app's own PrismaClient (src/lib/prisma.ts) connects
    // separately at runtime via the pooled DATABASE_URL through a driver
    // adapter.
    url: env("DIRECT_URL"),
  },
});
