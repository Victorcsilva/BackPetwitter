import { validateRequest } from "../middleware/auth.js";
import * as PostsController from "../controllers/posts-controler.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/posts",
    preHandler: [validateRequest],
    handler: PostsController.index,
  },

  Putusers: {
    method: "PUT",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.update,
  },
  Patchusers: {
    method: "PATCH",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.updatesingle,
  },
  Deleteusers: {
    method: "DELETE",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.Delete,
  },
};
