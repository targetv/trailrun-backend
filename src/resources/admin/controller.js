const { order } = require("../../utils/database");
const prisma = require("../../utils/database");

const getenteries = async (req, res) => {
  try {
    const enteries = await prisma.user.findMany({
      include: {
        order: {
          select: {
            id: true,
            Payment: true,
          },
        },
      },
    });
    res.status(201).json([...enteries]);
  } catch (error) {
    if (error.code === "P2002") {
      res.status(401).json("Entry already exists");
    } else {
      console.log("Error", error);
      res.status(401).json({ error });
    }
  }
};

const ageCategory = async (req, res) => {
  const age = {
    ...req.body,
  };

  try {
    const getAge = await prisma.user.findMany({
      where: {
        AND: [
          { ageonraceday: { gte: age.num1 } },
          { ageonraceday: { lte: age.num2 } },
        ],
      },
    });
    res.status(201).json([...getAge]);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error });
  }
};

module.exports = {
  getenteries,
  ageCategory,
};
