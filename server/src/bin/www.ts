import { createServer } from 'http';

import { logger } from '../utils/logger';
import { server } from '../index';

const port = normalizePort(process.env.PORT || '3000');
server.set('port', port);

const httpServer = createServer(server);

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

function normalizePort(portToNormalize: string): boolean | number {
  const parsed = parseInt(portToNormalize, 10);
  return parsed > 0 ? parsed : false;
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const address = httpServer.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address?.port}`;
  logger.info(`Listening on ${bind}`);
}