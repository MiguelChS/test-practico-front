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
        pictures: {
            secure_url: string;
        }[]
    }

    export interface IDescripcionResponse {
        plain_text: string;
    }

    export interface ICategoryResponse {
        path_from_root: {
            name: string;
        }[]
    }
}