import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  // getAllUsers: {
  //   method: "PUT",
  //   url: "/users/:id",
  //   preHandler: [validateRequest],
  //   handler: UserController.update,
  // },
  // getAllUsers: {
  //   method: "DELETE",
  //   url: "/users/:id",
  //   preHandler: [validateRequest],
  //   handler: UserController.deleteuser,
  // },

};
