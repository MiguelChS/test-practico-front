import { IAuthor, IProduct } from '../interface';
export interface ISearch {
    author: IAuthor;
    categories: string[];
    items: IProduct[];
}