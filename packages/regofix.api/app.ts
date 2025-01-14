import Fastify from 'fastify';
import exampleRoutes from './src/routes/routes';

export const createServer = () => {
  const server = Fastify();

  server.register(exampleRoutes);

  return server;
};