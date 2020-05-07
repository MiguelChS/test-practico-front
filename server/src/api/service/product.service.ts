import { ProductConnector, productConnector } from '../connector/products/product.connector';
import { SearchConvert, searchConvert } from '../converts/search/search.convert';
import { DetailConvert, detailConvert } from '../converts/details/detail.convert';
import { ErrorStandar } from '../../utils/errorStandar';
import { author } from '../config/author';
export class ProductService {
    constructor(
        private connector: ProductConnector,
        private searchConvert: SearchConvert,
        private detailConvert: DetailConvert
    ) { }

    async search({ q }: any) {
        if (!q) {
            throw new ErrorStandar('params q is required', 400);
        }
        const { data } = await this.connector.search(q);
        return this.searchConvert.convert(data, author);
    }

    async detail({ id }: any) {
        const [responseDetails, responseDescription] = await Promise.all(
            [
                this.connector.details(id),
                this.connector.description(id)
            ]
        );
        return this.detailConvert.convert(responseDetails.data, responseDescription.data, author);
    }

}

export const productService = new ProductService(productConnector, searchConvert, detailConvert);