import { Product } from './../models/product.model';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.tdo';

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    create(data: CreateProductDto): Product | Promise<Product[]>;
    // add(product: Product): Product | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product[]>;
    findOne(id: Product['id']): Product | Promise<Product[]> | undefined;
}