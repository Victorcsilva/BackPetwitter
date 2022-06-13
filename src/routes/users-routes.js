import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  Putusers: {
    method: "PUT",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.update,
  },
  getUsers: {
    method: "GET",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.getuser,
  },

  Patchusers: {
    method: "PATCH",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.updatesingle,
  },
  Deleteusers: {
    method: "DELETE",
    url: "/users/:id",
    preHandler: [validateRequest],
    handler: UserController.Delete,
  },
};
