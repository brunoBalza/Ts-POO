import axios from 'axios';
import type { Product } from '../models/product.model';
import type { UpdateProductDto } from '../dtos/product.tdo';

export class Example <TypeClass>{
    data: TypeClass[] = [];
};

const service4 = new Example<string>();
service4.data

const service1 = new Example<number>();
service1.data

export class BaseHttpService <TypeClass>{


    constructor (
        private url: string 
    ) {}

    async getAll(){
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
      }
}

// const service2 = new BaseHttpService<string>();
// service2.getAll()

// const service3 = new BaseHttpService<number>();
// service3.getAll()

(async () => {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<string>(url);

    productService.update<Product['id'], UpdateProductDto >(1, {
        title: 'new product',
        price: 10,
        images: ['http://example.com/image.jpg'],
        description: 'new description',
    });

    const rta = await productService.getAll();
    console.log('products', rta.length);

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoriesService = new BaseHttpService<number>(url2);
    
    const rta2 = await categoriesService.getAll();
    console.log('categories', rta2.length);    

}) ();
 