import { In } from "typeorm";
import { AppDataSource } from "../data-source";
import { ProductEntity } from "../entities/product.entity";

class ProductService {
  repo = AppDataSource.getRepository(ProductEntity);

  adaptClientEntity(productEntity) {
    productEntity.shops = `{${productEntity.shops.toLocaleString()}}`;
    productEntity.category = { id: productEntity.category_id };
    delete productEntity.category_id;

    return productEntity;
  }

  async getAll(orderDirection?: string, sortValue?: string, start?: string, end?: string, category_id?: string): Promise<ProductEntity[] | null> {
    const options: any = { relations: { category: true } };

    if (orderDirection && sortValue) {
      if (sortValue === "category_id") {
        options.order = { category: { id: orderDirection } };
      } else {
        options.order = { [sortValue]: orderDirection };
      }
    }

    if (start !== null && end !== null) {
      options.take = +end - +start;
      options.skip = start;
    }

    if (category_id) {
      options.where = { category: { id: category_id } };
    }

    return await this.repo.find(options);
  }

  async getByIds(ids: number[]): Promise<ProductEntity[]> {
    return await this.repo.find({ where: { id: In(ids) }, relations: { category: true } });
  }

  async getById(id: number): Promise<ProductEntity | null> {
    return await this.repo.findOne({ where: { id }, relations: { category: true } });
  }

  async update(newEntity: ProductEntity) {
    return this.repo.save(newEntity);
  }

  async create(newEntity: ProductEntity) {
    return this.repo.save(newEntity);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async getProductsPriceByCategory() {
    const productPricesByCategory = await this.repo
        .createQueryBuilder("product")
        .leftJoinAndSelect("product.category", "category")
        .select("category.name", "category")
        .addSelect("SUM(product.price)", "totalPrice")
        .groupBy("category.id")
        .getRawMany();

    return productPricesByCategory;
  }
}

export default new ProductService();