
import { ISearch } from './interface';
import { IPrice, IAuthor } from '../interface';
import { ProductApi } from '../../connector/products/interface';
export class SearchConvert {
    convert(data: ProductApi.ISearchResponse, author: IAuthor, categories: ProductApi.ICategoryResponse): ISearch {
        return {
            author,
            categories: categories.path_from_root.map(item => item.name),
            items: data.results.map((result) => ({
                id: result.id,
                title: result.title,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping,
                picture: result.thumbnail,
                price: this.getPrice(result)
            }))
        }
    }

    private getPrice(data: ProductApi.IResult): IPrice {
        const price = data.price.toString().split('.');
        return {
            amount: parseInt(price[0], 10),
            currency: "$",
            decimals: parseInt(price[1] || '0', 10)
        }
    }

    public getCategoryWithMoreResult(data: ProductApi.ISearchResponse) {
        const map = new Map();
        let categoryId = data.results[0]?.category_id || '';
        let max = 0;
        data.results.forEach((item) => {
            if (map.has(item.category_id)) {
                const total = map.get(item.category_id) + 1;
                if (total > max) {
                    categoryId = item.category_id;
                    max = total;
                }
                map.set(item.category_id, total);
            } else {
                map.set(item.category_id, 1);
            }
        });
        return categoryId;
    }
}

export const searchConvert = new SearchConvert();