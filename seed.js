import { connectDB } from "./db";
import faker from "faker";
import User from "./user";

export const gen = async () => {
  faker.seed(200);
  let users = [];
  await connectDB();
  for (let i = 0; i <= 200; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let address = faker.address.streetAddress();
    let user = new User({
      firstName,
      lastName,
      email,
      address,
    });
    users.push(user);
  }
  await User.insertMany(users);
  return;
};
