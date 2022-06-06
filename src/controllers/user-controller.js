import { prisma } from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    let users = await prisma.user.findMany({
      select: { email: true },
    });
    return res.send({ data: { users } });
  } catch (error) {
    console.error("users", error);
    res.status(500).send({ error: `Cannot fetch users` });
  }
};

export const update = async (req, reply) => {
  try {
    const { id } = req.params;
    const { name, email, username, password: pass } = req.body;
    const updateusers = await prisma.users.update({
      where: { id: +id },
      data: {
        name,
        email,
        username,
      },
    });
    return reply.status(200).send(updateusers);
  } catch (error) {
    reply.status(500).send({ error: "Erro no servidor" });
  }
};

export const Delete = async (req, reply) => {
  try {
    const { id } = req.params;
    const deleteusers = await prisma.users.delete({
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
