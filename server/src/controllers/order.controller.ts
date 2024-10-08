import OrderDto from "../dtos/order.dto";
import ApiError from "../errors/api.error";
import orderService from "../services/order.service";

class OrderController {
  async getMany(req, res, next) {
    try {
      const { _order, _sort, _start, _end } = req.query;

      const orders = await orderService.getAll(_order, _sort, _start, _end);
      res.set("Access-Control-Expose-Headers", "X-Total-Count");
      res.set("X-Total-Count", orders.length);

      return res.json(orders.map((order) => new OrderDto(order)));
    } catch (e) {
      next(ApiError.internal(e, "order"));
    }
    return;
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const order = await orderService.getById(id);

      return res.json(new OrderDto(order));
    } catch (e) {
      next(ApiError.internal(e, "order"));
    }
    return;
  }

  async create(req, res, next) {
    try {
      const newEntity = orderService.adaptClientEntity(req.body);
      const product = await orderService.create(newEntity);

      return res.json({ id: product.id, data: product });
    } catch (e) {
      next(ApiError.internal(e, "order"));
    }
    return;
  }

  async update(req, res, next) {
    try {
      const newEntity = orderService.adaptClientEntity(req.body);
      const product = await orderService.update(newEntity);

      return res.json({ id: product.id, data: product });
    } catch (e) {
      next(ApiError.internal(e, "order"));
    }
    return;
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await orderService.delete(id);

      return res.json({ id });
    } catch (e) {
      next(ApiError.internal(e, "order"));
    }
    return;
  }

}

export default new OrderController();