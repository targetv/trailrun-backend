const prisma = require("../../utils/database");

const getenteries = async (req, res) => {
  try {
    const enteries = await prisma.user.findMany();
    res.status(201).json([...enteries]);
  } catch (error) {
    console.log("Test error", error.code);
    // if (error.code === "P2002") {
    //   res.status(401).json("Entry already exists");
    // } else {
    //   console.log("Error", error);
    //   res.status(401).json({ error });
    // }
  }
};

module.exports = {
  getenteries,
};
