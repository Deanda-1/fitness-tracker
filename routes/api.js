const router = require("express").Router();
const { Workout } = require("../models/workout.js");

router.post("/api/workouts", ( req, res) => {
  Workout.create({type: "workout"})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id',({body,params},res)=>{
  let qid = params.id;
  let saved=[];
  Workout.find({_id: qid})
    .then(dbi=>{
        saved = dbi[0].exercises;
        Workout.findByIdAndUpdate(qid, {exercises: [...saved, body]}, function(err){
          console.log(err);
        })
        return res.json([...saved, body]);
    })
})

router.post("/api/workout/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put('/:id', (req, res) => res.json(`PUT route`));
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get('/api/workouts/range', (req,res)=>{
  Workout.find({}).sort({day:-1}).limit(7).then(range=>{res.json(range)})

})
//router.put

module.exports = router;