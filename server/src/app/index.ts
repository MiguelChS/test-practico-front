import { Router, Request, Response } from 'express';
import { join } from 'path';
const HTML_INDEX = join(__dirname, '../../build/index.html');
export const app = () => {
    const router = Router();
    router.get('*', (_: Request, res: Response) => {
        res.sendFile(HTML_INDEX);
    });
    return router;
}