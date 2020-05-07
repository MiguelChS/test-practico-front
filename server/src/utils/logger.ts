
import { config } from '../config';
import { createLogger } from 'bunyan';

const logger = createLogger({
  name: config.logger.nameApp,
  streams:[
    {
      path:"./error.log"
    }
  ]
})

export { logger };