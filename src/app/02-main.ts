import { ProductMemoryService } from "./services/product-memory.service"; 

const productService = new ProductMemoryService();

productService.create({
    title: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    categoryId: 1,
    image: ['image1.jpg']
})
console.log(productService.getAll());


const products = productService.getAll();
const productID = products[0].id;

productService.updateProduct ( productID, {
    title: 'New name product 1',
});

const rta = productService.findOne(productID);

console.log(rta);

