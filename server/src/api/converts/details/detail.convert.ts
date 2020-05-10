import { IDatail } from './interface';
import { IAuthor, IPrice } from '../interface';
import { ProductApi } from '../../connector/products/interface';
export class DetailConvert {
    convert(data: ProductApi.IDetailsResponse, descriptionResponse: ProductApi.IDescripcionResponse, author: IAuthor, categories: ProductApi.ICategoryResponse): IDatail {
        return {
            author,
            categories: categories.path_from_root.map(item => item.name),
            items: {
                id: data.id,
                title: data.title,
                condition: data.condition,
                picture: data?.pictures?.[0]?.secure_url || data.thumbnail,
                description: descriptionResponse.plain_text,
                free_shipping: data.shipping.free_shipping,
                price: this.getPrice(data),
                sold_quantity: data.sold_quantity
            }
        }
    }

    private getPrice(data: ProductApi.IDetailsResponse): IPrice {
        const price = data.price.toString().split('.');
        return {
            amount: parseInt(price[0], 10),
            currency: "$",
            decimals: parseInt(price[1] || '0', 10)

        }
    }
}

export const detailConvert = new DetailConvert();