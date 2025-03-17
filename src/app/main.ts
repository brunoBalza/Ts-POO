import axios from 'axios';
import { Product } from './models/product.model';


(async () => {
 
    async function getProduct() {
        const promise = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        const data = promise.data;
        return promise.data
    }
  
    const products = await getProduct();
    console.log(products.map(item => `${item.title} - ${item.id}`));

}) ();