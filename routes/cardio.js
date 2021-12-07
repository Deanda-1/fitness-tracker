const router = require("express").Router();
const Cardio = require("../models/cardio.js");

router.post("/api/cardio", ({ body }, res) => {
  Cardio.create(body)
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/cardio/bulk", ({ body }, res) => {
  Cardio.insertMany(body)
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put('/:id', (req, res) => res.json(`PUT route`));
router.get("/api/cardio", (req, res) => {
  Cardio.find({})
    .sort({ date: -1 })
    .then(dbCardio => {
      res.json(dbCardio);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//router.put

module.exports = router;