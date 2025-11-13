import app from "./app.js";
import dontenv from "dotenv";

dontenv.config({ path: "backend/config/config.env" });
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
