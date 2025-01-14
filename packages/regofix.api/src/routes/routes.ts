import { FastifyInstance } from 'fastify';
import { exampleController } from '../controllers/exampleController';

const exampleRoutes = async (server: FastifyInstance) => {
  server.get('/example', exampleController);
};

export default exampleRoutes;