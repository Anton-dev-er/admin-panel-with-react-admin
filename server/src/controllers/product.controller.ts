import ProductDto from "../dtos/product.dto";
import { ProductEntity } from "../entities/product.entity";
import ApiError from "../errors/api.error";
import productService from "../services/product.service";

class ProductController {
  async getMany(req, res, next) {
    try {
      const { id: ids, _order, _sort, _start, _end, category_id } = req.query;
      let products: ProductEntity[];
      if (ids) {
        products = await productService.getByIds(ids);
      } else {
        products = await productService.getAll(_order, _sort, _start, _end, category_id);
      }

      res.set("Access-Control-Expose-Headers", "X-Total-Count");
      res.set("X-Total-Count", products.length);

      return res.json(products.map((product) => new ProductDto(product)));
    } catch (e) {
      next(ApiError.internal(e, "product"));
    }
    return;
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.getById(id);

      return res.json(new ProductDto(product));
    } catch (e) {
      next(ApiError.internal(e, "product"));
    }
    return;
  }

  async create(req, res, next) {
    try {
      const newEntity = productService.adaptClientEntity(req.body);
      const product = await productService.create(newEntity);

      return res.json({ id: product.id, data: product });
    } catch (e) {
      next(ApiError.internal(e, "product"));
    }
    return;
  }

  async update(req, res, next) {
    try {
      const newEntity = productService.adaptClientEntity(req.body);
      const product = await productService.update(newEntity);

      return res.json({ id: product.id, data: product });
    } catch (e) {
      next(ApiError.internal(e, "product"));
    }
    return;
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await productService.delete(id);

      return res.json({ id });
    } catch (e) {
      next(ApiError.internal(e, "product"));
    }
    return;
  }
}

export default new ProductController();