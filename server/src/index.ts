import express from 'express';
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import { api } from './api';
import { app } from './app';
import { join } from 'path';
import { handleError } from './middleware/handleError';

const basePath = '';
const DIST_PATH = join(__dirname, '../build');
const server = express();
server.use(json());
server.use(cookieParser());
server.disable('x-powered-by');
server.use(`/`, express.static(DIST_PATH));
server.use(`${basePath}/api`, api());
server.use(basePath, app());
server.use(handleError);

export { server }

module.exports 
