export interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}
export interface IAuthor {
    name: string;
    lastname: string;
}
export interface IProduct {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: Boolean;
}