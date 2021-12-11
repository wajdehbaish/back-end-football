const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users.route");
const matchesRouter=require("./routes/match.route")

app.use(express.json());

app.use(cors());

app.use("/", usersRouter);
app.use("/api/matches", matchesRouter);

mongoose.connect(
  "mongodb+srv://wajde:wajde123@cluster0.lg6xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(process.env.PORT || 4000);
