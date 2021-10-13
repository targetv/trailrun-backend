const prisma = require("../../utils/database");

const paymentStatus = async (req, res) => {
  const paymenntInformation = {
    ...req.body,
  };
  try {
    const createPayment = await prisma.payment.create({
      data: {
        ...paymenntInformation,
      },
    });
    res.json({ ...createPayment });
  } catch (error) {
    console.log("Error", error);
    res.status(401).json({ error });
  }
};

module.exports = { paymentStatus };
