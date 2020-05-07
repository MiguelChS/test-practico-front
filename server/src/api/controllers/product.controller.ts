import { Request, Response, NextFunction } from 'express';
import { ProductService, productService } from '../service/product.service';
export class ProductController {
    constructor(
        private productService: ProductService
    ) { }
    public search = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.productService.search(req.query);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    public details = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.productService.detail(req.params);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}

export const productController = new ProductController(productService);