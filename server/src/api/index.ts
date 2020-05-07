import { Router } from 'express';
import { productController } from './controllers/product.controller';

export const api = () => {
    const router = Router();
    router.get('/items',productController.search)
    router.get('/items/:id',productController.details)
    return router;
}