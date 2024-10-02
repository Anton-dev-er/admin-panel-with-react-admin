import { AppDataSource } from "../data-source";
import { ClientEntity } from "../entities/client.entity";
import { In } from "typeorm";

class ClientService {
  repo = AppDataSource.getRepository(ClientEntity);

  async getAll(orderDirection?: string, sortValue?: string, start?: string, end?: string): Promise<ClientEntity[] | null> {
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

  async getByIds(ids: number[]): Promise<ClientEntity[] | null> {
    return await this.repo.find({ where: { id: In(ids) } });
  }

  async getById(id: number): Promise<ClientEntity | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async update(newEntity: ClientEntity) {
    return this.repo.save(newEntity);
  }

  async create(newEntity: ClientEntity) {
    return this.repo.save(newEntity);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

export default new ClientService();