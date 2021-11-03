const prisma = require("../../utils/database");
const bcrypt = require("bcrypt");
const { createToken, validateToken } = require("../../utils/authGenerator");

const AdminRegister = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const createUser = await prisma.admin.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    console.error("[ERROR] /signup route: ", error);
    if (error.code === "P2002") {
      res.status(501).json({
        error: {
          ...error,
          message: "User already exists.",
        },
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

const AdminLogin = async (req, res) => {
  const userCredentials = {
    ...req.body,
  };
  try {
    const getUser = await prisma.admin.findUnique({
      where: {
        email: userCredentials.email,
      },
    });

    if (!getUser) {
      res.status(401).json({ error: "Auth Failed" });
    }
    if (await bcrypt.compare(userCredentials.password, getUser.password)) {
      const token = createToken({ email: getUser.email, id: getUser.id });
      res.cookie("token", token, {
        maxAge: 86400000,
        secure: true,
        httpOnly: true,
        path: "/",
      });
      res.status(201).json({ id: getUser.id, email: getUser.email });
    } else {
      res.status(401).json({ error: "Password Incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const validateLoggedInToken = async (req, res) => {
  const token = req.cookies.token;

  let tokenPayload = token && validateToken(token);

  if (tokenPayload) {
    const userData = await prisma.admin.findUnique({
      where: {
        email: tokenPayload.email,
      },
      select: {
        email: true,
      },
    });
    res.json({ data: userData });
  } else {
    res.status(401).json({ err: "No valid token was found" });
  }
};

module.exports = {
  AdminRegister,
  AdminLogin,
  validateLoggedInToken,
};
