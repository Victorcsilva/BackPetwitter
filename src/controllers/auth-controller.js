import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const signup = async (req, reply) => {
  const { name, email, username, password: pass } = req.body;
  try {
    const password = await hashPassword(pass);
    const { password: hashedPassword, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password,
      },
    });

    reply.send(user);
  } catch (error) {
    console.log(error);
    reply.status(400).send({ error: `Esse usuario já existe` });
  }
};

export const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let user = await prisma.user.findUnique({ where: { email } });
    console.log(user);
    if (!user) {
      return reply.status(401).send({ error: "Email ou Senha Inválida" });
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send({ error: "Email ou Senha Inválida" });
    }
    let { password: pass, ...data } = user;
    console.log(data);
    return reply.send({
      user: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Server error!" });
  }
};

export const posts = async (req, reply) => {
  const { published } = req.body;
  try {
    const posts = await prisma.posts.create({
      data: {
        published,
      },
    });
    reply.status(201).send(posts);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o seu posts");
  }
};
