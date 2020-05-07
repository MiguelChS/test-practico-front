import { Request, Response, NextFunction } from 'express';
import { ErrorStandar } from '../utils/errorStandar';
import { logger } from '../utils/logger';
export const handleError = (err: ErrorStandar | Error, req: Request, res: Response, __: NextFunction) => {
    logger.error(err, {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        cookies: req.cookies,
        url: req.url,
        details: err instanceof ErrorStandar ? err.details : ''
    });
    if (err instanceof ErrorStandar) {
        res.status(err.httpStatus).send(err.message);
    } else {
        res.status(500).send(err.message);
    }
}