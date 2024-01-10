import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();
export default {
  schema: "./src/Models/*.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: String(process.env.DATABASE_URL),
  },
} satisfies Config;
