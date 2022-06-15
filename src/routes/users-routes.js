import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";
// import path from "path";
// import multer from "fastify-multer";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     const extension = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + Date.now() + extension);
//   },
// });
// const upload = multer({ storage });

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    // preHandler: upload.single("image_url"),
    preHandler: [validateRequest],
    handler: UserController.index,
  },

  Putusers: {
    method: "PUT",
    url: "/users/:id",
    // preHandler: upload.single("image_url"),
    preHandler: [validateRequest],
    handler: UserController.update,
  },
  getUsers: {
    method: "GET",
    url: "/users/:id",
    // preHandler: upload.single("image_url"),
    preHandler: [validateRequest],
    handler: UserController.getuser,
  },

  Patchusers: {
    method: "PATCH",
    url: "/users/:id",
    // preHandler: upload.single("image_url"),
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
