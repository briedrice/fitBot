const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

//Import typeDefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

//Imports Enviroment Vairable and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Workout = require("./models/Workout");
const Exercise = require("./models/Exercise");

//Connect to Mlab Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

// Create Apollo/Graphql server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Workout,
    Exercise
  }
});


server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
