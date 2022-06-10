import { prisma } from "../helpers/utils.js";

export const createposts = async (req, reply) => {
  const { content } = req.body;
  const { id } = req.user;
  console.log(content);
  console.log(id);
  try {
    const posts = await prisma.posts.create({
      data: {
        content,
        author: {
          connect: { id: Number(id) },
        },
      },
    });
    console.log(posts);
    return reply.send(posts);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o seu posts");
  }
};
export const index = async (req, res) => {
  try {
    let posts = await prisma.posts.findMany();
    console.log(posts);
    res.send(posts);
  } catch (error) {
    console.error("posts", error);
    res.status(500).send({ error: `Ops tivemos um problema no servidor...` });
  }
};

export const update = async (req, reply) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const updateposts = await prisma.posts.update({
      where: { id: +id },
      data: {
        content,
      },
    });
    return reply.status(200).send(updateposts);
  } catch (error) {
    reply.status(500).send({ error: "Erro no servidor" });
  }
};

export const Delete = async (req, reply) => {
  try {
    const { id } = req.params;
    const deleteposts = await prisma.posts.delete({
      where: { id: +id },
    });
    return reply.status(200).send(deleteposts);
  } catch (error) {
    reply.status(500).send({ error: "Erro no Servidor" });
  }
};

export const updatesingle = async (req, reply) => {
  const { id } = req.params;
  let data = {};
  console.log(req.body);

  if (req.body.content) {
    data.content = req.body.content;
  }

  try {
    const updatepatch = await prisma.posts.update({
      where: { id: +id },
      data,
    });
    return reply.status(200).send(updatepatch);
  } catch (error) {
    reply.status(500).send({ error: "Erro no Servidor" });
  }
};
