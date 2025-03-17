import { ProductHttpService } from './services/product.http.service';

(async ()=> {
    
    const productService = new ProductHttpService();

    try {
        console.log('--'.repeat(10));
        console.log('getAll');
        const products = await productService.getAll();
        console.log(products.length);
        console.log(products.map(item => item.id));
    
        const productId = products[2].id;
        console.log('--'.repeat(10));
        console.log(productId);
        
        console.log('update');
    
        await productService.update(productId, {
          price: 10000,
          title: 'new title',
          description: 'new description',
          images: ['new image'],
        //   categoryId  : 1            
        });
        console.log('--'.repeat(10));
        console.log('findOne');
    
        const product = await productService.findOne(productId);
        console.log(product.title);
      } catch(err:any) {
        console.error(err.response.data);
      }


})();