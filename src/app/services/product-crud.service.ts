import type { UpdateProductDto } from "../dtos/product.tdo";
import type { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductCRUDService {
    private url ='https://api.escuelajs.co/api/v1/products';
    private http = new BaseHttpService<Product>(this.url);

    async updateProduct(id: Product['id'], changes:UpdateProductDto) {
        // Logic to update a product
        // Permissions
        // Validation
        // Business logic
        return this.http.update(id, changes);
    }
}