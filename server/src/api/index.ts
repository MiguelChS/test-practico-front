import { Router } from 'express';
import { productController } from './controllers/product.controller';

export const api = () => {
    const router = Router();
    router.get('/items/:query',productController.search)
    return router;
}