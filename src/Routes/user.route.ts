import { FastifyInstance } from "fastify";
import {
  createUser,
  deleteUserByName,
  getAllUsers,
  getUserByName,
  updateUserByName,
} from "../Controllers/user.controller";

export const userRoutes = async (app: FastifyInstance) => {
  app.post("/", createUser);
  app.patch("/:name", updateUserByName);
  app.get("/", getAllUsers);
  app.get("/:name", getUserByName);
  app.delete("/:name", deleteUserByName);
};
