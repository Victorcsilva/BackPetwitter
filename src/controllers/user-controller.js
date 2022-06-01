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

export const create = async (req, res) => {
  const {name,email,username,password,profile_id} = req.body;
  try {
    const user = await prisma.user.create({
      data:{
        name,
        email,
        username,
        password,
        profile:{
          connect:{ id:+ profile_id}
        },
      },
    })
    return res.send({ data: { user } });
  } catch (error) {
    console.error("user", error);
    res.status(500).send({ error: `Não foi possivel fazer seu cadastro` });
  }
};