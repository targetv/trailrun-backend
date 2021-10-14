const prisma = require("../../utils/database");
const { emailSender } = require("../../views/emailsender");

const paymentStatus = async (req, res) => {
  const paymenntInformation = {
    ...req.body,
  };

  try {
    const createPayment = await prisma.payment.create({
      data: {
        ...paymenntInformation,
      },
      include: {
        order: {
          select: {
            user: true,
          },
        },
      },
    });

    emailSender(
      `${createPayment.order.user.email}`,
      "Registration Completed",
      "index"
    ).catch(console.error);
    res.json({ ...createPayment });
  } catch (error) {
    emailSender(
      `${createPayment.order.user.email}`,
      "Registration Failed",
      "failedpayment"
    ).catch(console.log(error));
    console.log("Error", error);
    res.status(401).json({ error });
  }
};

module.exports = { paymentStatus };
