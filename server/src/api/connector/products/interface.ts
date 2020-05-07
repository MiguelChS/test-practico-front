export namespace ProductApi {
    export interface IResult {
        id: string;
        title: string;
        price: number;
        currency_id: string;
        condition: string;
        category_id: string;
        thumbnail: string;
        shipping: {
            free_shipping: boolean;
        }
    }
    export interface ISearchResponse {
        results: IResult[]
    }

    export interface IDetailsResponse {
        id: string;
        title: string;
        price: number;
        currency_id: string;
        condition: string;
        category_id: string;
        thumbnail: string;
        shipping: {
            free_shipping: boolean;
        }
        sold_quantity: number;
    }

    export interface IDescripcionResponse {
        plain_text: string;
    }
}