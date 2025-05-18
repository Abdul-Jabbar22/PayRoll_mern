import mongoose from "mongoose";

 const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://abduljabbarray:1234@cluster0.rpfaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "payroll",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
export default dbConnection