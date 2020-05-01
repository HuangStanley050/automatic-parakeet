import { connectDB } from "./db";
export const gen = async () => {
  await connectDB();
};
