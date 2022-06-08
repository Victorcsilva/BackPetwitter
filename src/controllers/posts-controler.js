import { prisma } from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    let posts = await prisma.posts.findMany({});
    return res.send({ data: { posts } });
  } catch (error) {
    console.error("posts", error);
    res.status(500).send({ error: `Ops tivemos um problema no servidor...` });
  }
};

export const update = async (req, reply) => {
  try {
    const { id } = req.params;
    const { published } = req.body;
    const updateposts = await prisma.posts.update({
      where: { id: +id },
      data: {
        published,
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

  if (req.body.published) {
    data.published = req.body.published;
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
