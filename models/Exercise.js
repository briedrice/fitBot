const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  muscleGroup: {
    type: [String],
    required: true
  },

  description: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },

  reps: {
    type: Number,
    default: 0
  },

  time: {
    type: Number,
    default: 0
  },

  weight: {
    type: Number,
    default: 0
  },

  cardioLevel: {
    type: Number,
    default: 0
  },

  flexibilityLevel: {
    type: Number,
    default: 0
  },

  strengthLevel: {
    type: Number,
    default: 0
  },

  difficulty: {
    type: Number,
    default: 0
  },

  imageUrl: {
    type: String,
    default: 'https://img.etimg.com/thumb/msid-63052274,width-643,imgsize-263559,resizemode-4/getting-fit-just-got-easier-all-you-need-to-do-are-these-5-exercises-for-a-complete-workout.jpg'
  },

  videoUrl: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
