import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-mern.zakhd.mongodb.net/?retryWrites=true&w=majority&appName=ToDo-mern`;

const Connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error while connecting with the database:", error.message); // Use error object here
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});

export default Connection;
