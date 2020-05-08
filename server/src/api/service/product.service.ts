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
        const categoriId = this.searchConvert.getCategoryWithMoreResult(data);
        const responseCategory = await this.connector.categories(categoriId);
        return this.searchConvert.convert(data, author, responseCategory.data);
    }

    async detail({ id }: any) {
        const [responseDetails, responseDescription] = await Promise.all(
            [
                this.connector.details(id),
                this.connector.description(id)
            ]
        );
        const responseCategory = await this.connector.categories(responseDetails.data.category_id);
        return this.detailConvert.convert(responseDetails.data, responseDescription.data, author, responseCategory.data);
    }

}

export const productService = new ProductService(productConnector, searchConvert, detailConvert);