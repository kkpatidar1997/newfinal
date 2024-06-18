// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import http from "http";
// import mongoose from "mongoose";
// import "dotenv/config";
// import routes from "./src/routes/index.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use("/api/v1", routes);

// const port = process.env.PORT || 5000;

// const server = http.createServer(app);

// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("Mongodb connected");
//   server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }).catch((err) => {
//   console.log({ err });
//   process.exit(1);
// });

// //test
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Export the app for Vercel
export default app;
