import { AppDataSource } from "../data-source";
import { OrderEntity } from "../entities/order.entity";

class OrderService {
  repo = AppDataSource.getRepository(OrderEntity);

  adaptClientEntity(orderEntity) {
    orderEntity.product = { id: orderEntity.product_id };
    delete orderEntity.product_id;

    orderEntity.client = { id: orderEntity.client_id };
    delete orderEntity.client_id;

    return orderEntity;
  }

  async getAll(orderDirection?: string, sortValue?: string, start?: string, end?: string): Promise<OrderEntity[] | null> {
    const options: any = { relations: { product: true, client: true } };

    if (orderDirection && sortValue) {
      if (sortValue === "product_id") {
        options.order = { product: { id: orderDirection } };
      } else if (sortValue === "client_id") {
        options.order = { client: { id: orderDirection } };
      } else {
        options.order = { [sortValue]: orderDirection };
      }
    }

    if (start !== null && end !== null) {
      options.take = +end - +start;
      options.skip = start;
    }

    return await this.repo.find(options);
  }

  async getById(id: number): Promise<OrderEntity | null> {
    return await this.repo.findOne({ where: { id }, relations: { product: true, client: true } });
  }

  async update(newEntity: OrderEntity) {
    return this.repo.save(newEntity);
  }

  async create(newEntity: OrderEntity) {
    return this.repo.save(newEntity);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async getOrderByDate() {
    const queryBuilder = this.repo.createQueryBuilder("order");
    return queryBuilder
        .select("DATE(order.date)", "date")
        .addSelect("COUNT(*)", "orderCount")
        .groupBy("DATE(order.date)")
        .getRawMany();
  }

  async getProductsOrderedCount() {
    const queryBuilder = this.repo.createQueryBuilder("order");

    return queryBuilder
        .leftJoinAndSelect("order.product", "product")
        .select("product.name", "productName")
        .addSelect("SUM(order.quantity)", "totalQuantity")
        .groupBy("product.id")
        .getRawMany();
  }
}

export default new OrderService();