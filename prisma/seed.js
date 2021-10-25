const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const dbClient = new PrismaClient();
async function seed() {
  await dbClient.payment.deleteMany();
  await dbClient.order.deleteMany();
  await dbClient.user.deleteMany();

  for (let i = 0; i < 150; i++) {
    await dbClient.user.create({
      data: {
        email: `${faker.internet.email()}`,
        firstname: `${faker.name.firstName()}`,
        lastname: `${faker.name.lastName()}`,
        dob: `${faker.date.past()}`,
        address: `${faker.address.streetAddress()}`,
        postcode: `${faker.address.zipCode()}`,
        telephonenumber: `${faker.phone.phoneNumber()}`,
        gender: `male`,
        ageonraceday: faker.datatype.number({ min: 18, max: 70 }),
        shirtsize: "L",
        clubmember: faker.datatype.boolean(),
        clubname: `${faker.lorem.word()}`,
        registernumber: faker.datatype.number(),
        signature: "Test",
      },
    });
  }
  for (let i = 0; i < 150; i++) {
    await dbClient.user.create({
      data: {
        email: `${faker.internet.email()}`,
        firstname: `${faker.name.firstName()}`,
        lastname: `${faker.name.lastName()}`,
        dob: `${faker.date.past()}`,
        address: `${faker.address.streetAddress()}`,
        postcode: `${faker.address.zipCode()}`,
        telephonenumber: `${faker.phone.phoneNumber()}`,
        gender: `female`,
        ageonraceday: faker.datatype.number({ min: 18, max: 70 }),
        shirtsize: "L",
        clubmember: faker.datatype.boolean(),
        clubname: `${faker.lorem.word()}`,
        registernumber: faker.datatype.number(),
        signature: "Test",
      },
    });
  }
}
seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });

module.exports = { seed };
