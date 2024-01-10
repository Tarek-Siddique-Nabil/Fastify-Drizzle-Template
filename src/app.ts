import { FastifyReply, FastifyRequest } from "fastify";
import { config } from "./Config/config";
import { db } from "./Config/db";

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { buildServer } from "./Utils/server";
import { logger } from "./Utils/logger";

const main = async () => {
  const app = await buildServer();

  app.listen({
    port: Number(config.app.port),
    host: "localhost",
  });
  app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("SERVER WORKING");
  });
  await migrate(db, {
    migrationsFolder: "./drizzle",
  });
  logger.success(`🚀 Server ready at http://localhost:${config.app.port}`);
};

main();
