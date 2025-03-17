import axios from 'axios';

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

}

// const service2 = new BaseHttpService<string>();
// service2.getAll()

// const service3 = new BaseHttpService<number>();
// service3.getAll()

(async () => {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<string>(url);
    
    const rta = await productService.getAll();
    console.log('products', rta.length);

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoriesService = new BaseHttpService<number>(url2);
    
    const rta2 = await categoriesService.getAll();
    console.log('categories', rta2.length);    

} )();
