const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Workout" + Date.now.toString(),
    required: true
  },

  intensity: {
    type: Number,
    required: true
  },

  muscleGroup: {
    type: [String],
    required: true
  },

  exercises: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Exercise"
  },

  createdDate: {
    type: Date,
    default: Date.now
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },

  completionTime: {
    type: String
  },

  wasFinished: {
    type: Boolean
  },

  notes: [
    {
      notesBody: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("Workout", WorkoutSchema);
