import { AppDataSource } from "../data-source";
import { CategoryEntity } from "../entities/category.entity";
import { In } from "typeorm";

class CategoryService {
  repo = AppDataSource.getRepository(CategoryEntity);

  async getAll(orderDirection?: string, sortValue?: string, start?: string, end?: string): Promise<CategoryEntity[] | null> {
    const options: any = {};

    if (orderDirection && sortValue) {
      options.order = { [sortValue]: orderDirection };
    }

    if (start !== null && end !== null) {
      options.take = +end - +start;
      options.skip = start;
    }

    return await this.repo.find(options);
  }

  async getByIds(ids: number[]): Promise<CategoryEntity[] | null> {
    return await this.repo.find({ where: { id: In(ids) } });
  }

  async getById(id: number): Promise<CategoryEntity | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async update(newEntity: CategoryEntity) {
    return this.repo.save(newEntity);
  }

  async create(newEntity: CategoryEntity) {
    return this.repo.save(newEntity);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

export default new CategoryService();