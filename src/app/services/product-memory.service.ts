import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto, } from '../dtos/product.tdo';
import { ProductService } from '../models/product-service';

export class ProductMemoryService implements ProductService {
    private products: Product[] = [];

    getAll() {
        return this.products;
    }

    create(data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.number.int({ min: 10, max: 100 }),
            category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            image: faker.image.url(),
            }
        }
        return this.add(newProduct);
    };

    add(product: Product) {
        this.products.push(product);
        return product;
    };

    update(id: Product['id'], changes: UpdateProductDto ): Product {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
          ...prevData,
          ...changes
        }
        return this.products[index];
    }

    findOne (id: Product['id']) {
        return this.products.find(item => item.id ===id);
    };
};






// export const findProducts = (dto: FindProductDto): Product[] => {
//   // code
//   // dto.color = 'blue';
//   // dto.isNew = true;
//   // dto.tags = [];
//   // dto.tags?.pop();
//   // dto.tags?.push();
//   return products;
// 