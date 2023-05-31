import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL).then((res) => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err));