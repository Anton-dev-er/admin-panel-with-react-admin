import orderService from "../services/order.service";
import productService from "../services/product.service";

class DashboardController {
  async getOrdersByDate(req, res, next) {
    try {
      return res.json(await orderService.getOrderByDate());
    } catch (e) {
      next(e);
    }
    return;
  }

  async getProductsPriceByCategory(req, res, next) {
    try {
      return res.json(await productService.getProductsPriceByCategory());
    } catch (e) {
      next(e);
    }
    return;
  }

  async getProductsOrderedCount(req, res, next) {
    try {
      const re = await orderService.getProductsOrderedCount();

      return res.json(re);
    } catch (e) {
      next(e);
    }
    return;
  }
}

export default new DashboardController();