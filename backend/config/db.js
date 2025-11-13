import mongoose from "mongoose";

export const DBConnection = () => {
  mongoose
    .connect(process.env.DB_HOST)
    .then((data) => {
      console.log("DB Connection Successful : ", data.connection.host);
    })
    .catch((err) => {
      console.log("DB Connection Failed : ", err.message);
    });
};
