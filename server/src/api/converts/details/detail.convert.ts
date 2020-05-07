import { IDatail } from './interface';
import { IAuthor, IPrice } from '../interface';
import { ProductApi } from '../../connector/products/interface';
export class DetailConvert {
    convert(data: ProductApi.IDetailsResponse, descriptionResponse: ProductApi.IDescripcionResponse, author: IAuthor): IDatail {
        return {
            author,
            items: {
                id: data.id,
                title: data.title,
                condition: data.condition,
                picture: data.thumbnail,
                description: descriptionResponse.plain_text,
                free_shipping: data.shipping?.free_shipping || false,
                price: this.getPrice(data),
                sold_quantity: data.sold_quantity
            }
        }
    }

    private getPrice(data: ProductApi.IDetailsResponse): IPrice {
        const price = data.price.toString().split('.');
        return {
            amount: parseInt(price[0], 10),
            currency: data.currency_id,
            decimals: parseInt(price[1] || '0', 10)

        }
    }
}

export const detailConvert = new DetailConvert();