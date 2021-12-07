const API = {
  async getLastWorkout() {
    let res;
    try {
      let res = await fetch("/api/workouts");
      let json = await res.json();
      console.log(json, json[json.length - 1]);
      return json[json.length - 1];
    } catch (err) {
      console.log(err)
    }
    

  },

  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    const json = await res.json();
    return json;
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
