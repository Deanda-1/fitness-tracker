const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// go through the model and check fields and types
const workOutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  weight: {
    type: Number,
    required: "Enter an amount"
  },
  sets: {
    type: Number,
    required: "Enter an amount"
  },
  reps: {
    type: Number,
    required: "Enter an amount"
  },
duration: {
  type: Number,
    required: "Enter an amount"
},
type: {
  type: String,
  required: "Resistance"
}
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
