import User from "./user";
import { connectDB } from "./db";
import "./cache";

export const getUsers = async (event, context) => {
  try {
    await connectDB();
    const users = await User.find({}).cache();
    console.log(users);
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: "something happened",
    };
  }
};
