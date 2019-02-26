const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getExercises: async (_, args, {Exercise}) =>{
      const exercises = await Exercise.find({})
      return exercises;
    }
  },
  Mutation: {
    signinUser: async (_, {username, password}, { User }) => {
      const user = await User.findOne({ username });
      if(!user){
        throw new Error('user not Found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if(!isValidPassword){
        throw new Error('Invalid password')
      }
      return {token: createToken(user, process.env.SECRET, '1hr')};
    },

    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }

      const newUser = await new User({ username, email, password }).save();
      return {token: createToken(newUser, process.env.SECRET, '1hr')};
    },

    createExercise: async (
      _,
      { title, muscleGroup, description, value },
      { Exercise }
    ) => {
      const exercise = await Exercise.findOne({ title });
      if (exercise) {
        throw new Error("exercise already exists");
      }

      const newExercise = await new Exercise({
        title,
        muscleGroup,
        description,
        value
      }).save();
      return newExercise;
    }
  }
};
