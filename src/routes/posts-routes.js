import { validateRequest } from "../middleware/auth.js";
import * as PostsController from "../controllers/posts-controler.js";

export default {
  createposts: {
    method: "POST",
    url: "/posts",
    preHandler: [validateRequest],
    handler: PostsController.createposts,
  },

  getAllPosts: {
    method: "GET",
    url: "/posts",
    preHandler: [validateRequest],
    handler: PostsController.index,
  },

  getAllpostsid: {
    method: "GET",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.FindPosts,
  },

  PutPosts: {
    method: "PUT",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.update,
  },
  PatchPosts: {
    method: "PATCH",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.updatesingle,
  },
  DeletePosts: {
    method: "DELETE",
    url: "/posts/:id",
    preHandler: [validateRequest],
    handler: PostsController.Delete,
  },
};
