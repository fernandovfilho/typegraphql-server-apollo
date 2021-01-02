import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/type-graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
