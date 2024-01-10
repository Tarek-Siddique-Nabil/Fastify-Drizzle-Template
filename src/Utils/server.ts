import fastify from "fastify";
import { userRoutes } from "../Routes/user.route";

export const buildServer = async () => {
  const app = fastify({
    logger: false,
  });
  app.register(userRoutes, { prefix: "/api/user" });
  return app;
};
