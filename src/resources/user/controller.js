const prisma = require("../../utils/database");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const newUser = {
    ...req.body,
  };

  try {
    const createUser = await prisma.user.create({
      data: {
        ...newUser,
      },
    });
    res.status(201).json(createUser.id);
  } catch (error) {
    if (error.code === "P2002") {
      res.status(406).json({
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

module.exports = {
  register,
};
