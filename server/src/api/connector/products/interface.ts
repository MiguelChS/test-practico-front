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
}