import express from 'express';
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import { api } from './api';
import { join } from 'path';
import { handleError } from './middleware/handleError';

const basePath = '';
const DIST_PATH = join(__dirname, '../dist');
const VIEWS_PATH = join(__dirname, '/views');
const server = express();
server.use(json());
server.use(cookieParser());
server.set('views', VIEWS_PATH);
server.set('view engine', 'pug');
server.disable('x-powered-by');
server.use(`${basePath}/assets`, express.static(DIST_PATH));;
server.use(`${basePath}/api`, api());
server.use(handleError);

export { server }

module.exports 
