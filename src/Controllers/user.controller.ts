import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../Config/db";

import { eq } from "drizzle-orm";

import { users } from "../Models/user.model";
import { logger } from "../Utils/logger";

export const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name }: { name: string } = request.body as { name: string };
  logger.info(name);
  const createUser = await db.insert(users).values({ name }).returning();
  reply.send(createUser);
};

export const getAllUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  const allUsers = await db.select().from(users);
  reply.send(allUsers);
};

export const getUserByName = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name }: { name: string } = request.params as { name: string };
  const getUser = await db.select().from(users).where(eq(users.name, name));
  reply.send(getUser);
};

export const updateUserByName = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name }: { name: string } = request.params as { name: string };
  const { newName }: { newName: string } = request.body as { newName: string };
  const updateUser = await db.update(users).set({ name: newName }).where(eq(users.name, name)).returning();
  reply.send(updateUser);
};

export const deleteUserByName = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name }: { name: string } = request.params as { name: string };
  const deleteUser = await db.delete(users).where(eq(users.name, name)).returning();
  reply.send(deleteUser);
};
