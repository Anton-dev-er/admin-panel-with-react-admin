import { ProductEntity } from "../entities/product.entity";

export default class ProductDto {
  private id: number;
  private name: string;
  private price: number;
  private shops: string[];
  private category_id: number;



  constructor(product: ProductEntity) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.shops = product.shops;
    this.category_id = product.category.id;
  }
}