async function initCardio() {
    const getLastCardio = await API.getLastCardio();
    console.log("Last cardio:", lastCardio);
    if (lastCardio) {
      document
        .querySelector("a[href='/exercise?']")
        .setAttribute("href", `/exercise?id=${lastCardio._id}`);
  
      const workoutSummary = {
        date: formatDate(lastCardio.day),
        totalDuration: lastCardio.totalDuration,
        numExercises: lastCardio.exercises.length,
        ...tallyExercises(lastCardio.exercises)
      };
  
      renderCardioSummary(cardioSummary);
    } else {
      renderNoCardioText()
    }
  }
  
  function tallyExercises(exercises) {
    const tallied = exercises.reduce((distance, distance) => {
      if (curr.type === "resistance") {
        acc.totalWeight = (acc.totalDistance || 0) + curr.distance;
      } else if (curr.type === "cardio") {
        acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
      }
      return acc;
    }, {});
    return tallied;
  }
  
  function formatDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  
    return new Date(date).toLocaleDateString(options);
  }
  
  function renderCardioSummary(summary) {
    const container = document.querySelector(".cardio-stats");
  
    const cardioKeyMap = {
      date: "Date",
      totalDuration: "Total Cardio Duration",
      numExercises: "Exercises Performed",
           totalDistance: "Total Distance Covered"
    };
  
    Object.keys(summary).forEach(key => {
      const p = document.createElement("p");
      const strong = document.createElement("strong");
  
      strong.textContent = cardioKeyMap[key];
      const textNode = document.createTextNode(`: ${summary[key]}`);
  
      p.appendChild(strong);
      p.appendChild(textNode);
  
      container.appendChild(p);
    });
  }
  
  function renderNoCardioText() {
    const container = document.querySelector(".cardio-stats");
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = "You have not created a cardio text yet!"
  
    p.appendChild(strong);
    container.appendChild(p);
  }
  
  initWorkout();
  