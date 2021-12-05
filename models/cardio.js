const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// go through the model and check fields and types
const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for cardio"
      },
      Duration: {
        type: String,
        trim: true,
        required: "Enter how much time used for cardio"
      },
      Distance: {
        type: String,
        trim: true,
        required: "Enter how long is the traveled time for cardio"
      }, 
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;