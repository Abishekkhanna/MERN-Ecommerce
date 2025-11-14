import app from "./app.js";
import dontenv from "dotenv";
import { DBConnection } from "./config/db.js";

dontenv.config({ path: "backend/config/config.env" });
const PORT = process.env.PORT;

DBConnection();

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Server is Shutting Down");

  process.exit(1);
});

const server = app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Server is Shutting Down");

  server.close(() => {
    process.exit(1);
  });
});
