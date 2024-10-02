import HttpService from "./HttpService.ts";

export default class DashboardService {
  static api = new HttpService("/dashboard");

  static async getOrderByDate(): Promise<[]> {
    return this.api.get("/order-rate");
  }

  static async getProductsPriceByCategory(): Promise<[]> {
    return this.api.get("/products-price-by-category");
  }

  static async getProductsOrderedCount(): Promise<[]> {
    return this.api.get("/products-ordered-count");
  }
}