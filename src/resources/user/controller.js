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
    res.status(201).json({ createUser });
  } catch (error) {
    console.log("ERROR", error);
    if (error.code === "P2002") {
      res.status(501).json({
        error: {
          ...error,
          message: "User already exists",
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
