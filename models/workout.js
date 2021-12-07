const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// go through the model and check fields and types
const workOutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name:{
        type:String,
        trim: true
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
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
          required: "Enter an amount"
      },
      type: {
        type: String,
        required: "Resistance"
      }
   }
  ]
  
},{toJSON:{virtuals:true}});

workOutSchema.virtual('totalDuration').get(function(){
return this.exercises.reduce((total,exercise)=>{ return total+ exercise.duration;},0)
});

workOutSchema.virtual('totalDistance').get(function(){
  return this.exercises.reduce((total,exercise)=>{ return total+ exercise.distance;},0)
  });
  

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = {Workout};
