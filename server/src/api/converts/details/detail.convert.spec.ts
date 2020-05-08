import { detailConvert } from './detail.convert';

const mockDetailsResult: any = {
    "id": "MLA841967810",
    "title": "Auriculares Apple Earpods With Lightning Connector Blanco",
    "price": 3999.99,
    "currency_id": "ARS",
    "category_id": "1",
    "sold_quantity": 0,
    "condition": "new",
    "thumbnail": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
    "shipping": {
        "free_shipping": true
    }
}

const mockAuthor: any = {
    name: 'Miguel Angel',
    lastname: 'Chauca Sanchez'
}

const mockCategory: any = {
    path_from_root: [
        { name: "a" },
        { name: "b" },
        { name: "c" }
    ]
}

const mockDescription: any = {
    plain_text: 'description'
}


describe('detailConvert', () => {
    it('should return the product detail', () => {
        let result = detailConvert.convert(mockDetailsResult, mockDescription, mockAuthor, mockCategory);
        expect(result).toEqual({
            "author": { "lastname": "Chauca Sanchez", "name": "Miguel Angel" },
            "categories": ["a", "b", "c"],
            "items": {
                "condition": "new",
                "free_shipping": true,
                "id": "MLA841967810",
                "picture": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
                "price": { "amount": 3999, "currency": "$", "decimals": 99 },
                "title": "Auriculares Apple Earpods With Lightning Connector Blanco",
                "sold_quantity": 0,
                "description": "description"
            }
        });
        result = detailConvert.convert({ ...mockDetailsResult, price: 400 }, mockDescription, mockAuthor, mockCategory);
        expect(result).toEqual({
            "author": { "lastname": "Chauca Sanchez", "name": "Miguel Angel" },
            "categories": ["a", "b", "c"],
            "items": {
                "condition": "new",
                "free_shipping": true,
                "id": "MLA841967810",
                "picture": "http://mla-s1-p.mlstatic.com/957682-MLA40251750147_122019-I.jpg",
                "price": { "amount": 400, "currency": "$", "decimals": 0 },
                "title": "Auriculares Apple Earpods With Lightning Connector Blanco",
                "sold_quantity": 0,
                "description": "description"
            }
        });
    });
})