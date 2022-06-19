import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    let users = await prisma.user.findMany({
      select: { email: true },
    });
    return res.send({ data: { users } });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Cannot fetch users` });
  }
};

export const update = async (req, reply) => {
  try {
    // const img = req.file;
    const { id } = req.params;
    const password = await hashPassword(pass);
    const { name, email, username } = req.body;
    const updateusers = await prisma.user.update({
      where: { id: +id },
      data: {
        name,
        email,
        username,
        password,
        // image_url: img.path,
      },
    });
    reply.status(200).send(updateusers);
  } catch (error) {
    reply.status(500).send({ error: "Erro no servidor" });
  }
};

export const Delete = async (req, reply) => {
  try {
    const { id } = req.params;
    const deleteusers = await prisma.user.delete({
      where: { id: +id },
    });
    return reply.status(200).send(deleteusers);
  } catch (error) {
    reply.status(500).send({ error: "Erro no Servidor" });
  }
};

export const updatesingle = async (req, reply) => {
  const { id } = req.params;
  let data = {};
  console.log(req.body);
  if (req.body.name) {
    data.name = req.body.name;
  }

  if (req.body.email) {
    data.year = req.body.email;
  }

  if (req.body.username) {
    data.username = req.body.username;
  }
  if (req.body.password) {
    data.password = req.body.password;
  }
  // if (req.file) {
  //   ata.image_url = req.file.path;
  // }
  try {
    const updatepatch = await prisma.users.update({
      where: { id: +id },
      data,
    });
    return reply.status(200).send(updatepatch);
  } catch (error) {
    reply.status(500).send({ error: "Erro no Servidor" });
  }
};

export const getuser = async (req, reply) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findMany({ where: { id: Number(id) } });
    return reply.send(user);
  } catch (error) {
    reply.status(500).send({ error: "Não foi possivel encontrar o usuario" });
  }
};
