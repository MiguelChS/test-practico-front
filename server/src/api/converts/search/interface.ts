export interface IPrice {
    currency: string;
    amount: number;
    decimals: number;
}
export interface ISearch {
    author: {
        name: string;
        lastname: string;
    };
    categories: string[];
    items:{
        id: string;
        title: string;
        price: IPrice;
        picture: string;
        condition: string;
        free_shipping: Boolean;
    }[];
}