
import { ISearch } from './interface';
import { IPrice, IAuthor } from '../interface';
import { ProductApi } from '../../connector/products/interface';
export class SearchConvert {
    convert(data: ProductApi.ISearchResponse, author: IAuthor): ISearch {
        return {
            author,
            categories: [],
            items: data.results.map((result) => ({
                id: result.id,
                title: result.title,
                condition: result.condition,
                free_shipping: result.shipping?.free_shipping || false,
                picture: result.thumbnail,
                price: this.getPrice(result)
            }))
        }
    }

    private getPrice(data: ProductApi.IResult): IPrice {
        const price = data.price.toString().split('.');
        return {
            amount: parseInt(price[0], 10),
            currency: data.currency_id,
            decimals: parseInt(price[1] || '0', 10)

        }
    }
}

export const searchConvert = new SearchConvert();