import { ClientEntity } from "../entities/client.entity";
import ApiError from "../errors/api.error";
import clientService from "../services/client.service";

class ClientController {
  async getMany(req, res, next) {
    try {
      const { id: ids, _order, _sort, _start, _end } = req.query;
      let clients: ClientEntity[];
      if (ids) {
        clients = await clientService.getByIds(ids);
      } else {
        clients = await clientService.getAll(_order, _sort, _start, _end);
      }
      res.set("Access-Control-Expose-Headers", "X-Total-Count");
      res.set("X-Total-Count", clients.length);

      return res.json(clients);
    } catch (e) {
      next(ApiError.internal(e, "client"));
    }
    return;
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;

      return res.json(await clientService.getById(id));
    } catch (e) {
      next(ApiError.internal(e, "client"));
    }
    return;
  }

  async update(req, res, next) {
    try {
      const client = await clientService.update(req.body);

      return res.json({ id: client.id, data: client });
    } catch (e) {
      next(ApiError.internal(e, "client"));
    }
    return;
  }

  async create(req, res, next) {
    try {
      const client = await clientService.create(req.body);

      return res.json({ id: client.id, data: client });
    } catch (e) {
      next(ApiError.internal(e, "client"));
    }
    return;
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await clientService.delete(id);

      return res.json({ id });
    } catch (e) {
      next(ApiError.internal(e, "client"));
    }
    return;
  }
}

export default new ClientController();