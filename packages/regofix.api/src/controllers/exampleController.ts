import { FastifyReply, FastifyRequest } from "fastify";
import { exampleService } from "../services/exampleService";

export const exampleController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const result = await exampleService();
  reply.send(result);
};
