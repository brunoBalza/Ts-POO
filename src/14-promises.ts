import axios from 'axios';

(async () => {
 
    function delay (time: number) {
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        return promise;
    };
    console.log('---------------');    
    const rta = await delay(3000);
    console.log(rta);
    
    
    
    function getProduct() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    async function getProductAsync() {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta.data;
    }
    
    console.log('--------------- 2');    
    const products = await getProduct();
    // console.log(products);

    const productsAsync = await getProductAsync();
    console.log(productsAsync);
    

    
}) ();
