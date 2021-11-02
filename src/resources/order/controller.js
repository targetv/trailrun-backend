const prisma = require("../../utils/database");

const saveOrder = async (req, res) => {
  const orderBody = {
    ...req.body,
  };
  try {
    const saveOrder = await prisma.order.create({
      data: {
        userid: parseInt(orderBody.userid),
        productid: parseInt(orderBody.productid),
      },
    });
    res.status(201).json({ ...saveOrder });
  } catch (error) {
    console.log("Error", error);
    res.status(401).json({ ...error });
  }
};

const getOrder = async (req, res) => {
  const orderBody = {
    ...req.body,
  };

  try {
    const getUserOrder = await prisma.order.findUnique({
      where: {
        id: Number(orderBody.id),
      },
      include: {
        product: true,
      },
    });
    res.json({ ...getUserOrder });
  } catch (error) {
    console.log("Erorr", error);
    res.status(401).json({ error });
  }
};

module.exports = { saveOrder, getOrder };
