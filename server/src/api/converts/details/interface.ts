import { IAuthor, IProduct } from '../interface';

export interface IProductDetails extends IProduct {
    sold_quantity: number;
    description: string;
}

export interface IDatail {
    author: IAuthor;
    items: IProductDetails;
    categories: string[];
}