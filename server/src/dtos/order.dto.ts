import { OrderEntity } from "../entities/order.entity";

export default class OrderDto {
  private id: number;
  private quantity: number;
  private date: number;
  private product_id: number;
  private client_id: number;


  constructor(order: OrderEntity) {
    this.id = order.id;
    this.quantity = order.quantity;
    this.date = order.date;
    this.product_id = order.product.id;
    this.client_id = order.client.id;
  }
}