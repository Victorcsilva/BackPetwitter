import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  Postusers:{
    method: 'Post',
    url: '/cadastro',
    handler: UserController.create
  }
};
