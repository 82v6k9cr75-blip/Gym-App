let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function addWorkout() {
  let exercise = document.getElementById("exercise").value;
  let weight = document.getElementById("weight").value;
  let sets = document.getElementById("sets").value;
  let reps = document.getElementById("reps").value;

  if (!exercise || !weight || !sets || !reps) return;

  workouts.push({ exercise, weight, sets, reps });
  localStorage.setItem("workouts", JSON.stringify(workouts));

  display();
}

function deleteWorkout(index) {
  workouts.splice(index, 1);
  localStorage.setItem("workouts", JSON.stringify(workouts));
  display();
}

function editWorkout(index) {
  let newExercise = prompt("Edit exercise:", workouts[index].exercise);
  let newWeight = prompt("Edit weight:", workouts[index].weight);
  let newSets = prompt("Edit sets:", workouts[index].sets);
  let newReps = prompt("Edit reps:", workouts[index].reps);

  if (newExercise && newWeight && newSets && newReps) {
    workouts[index] = {
      exercise: newExercise,
      weight: newWeight,
      sets: newSets,
      reps: newReps
    };
    localStorage.setItem("workouts", JSON.stringify(workouts));
    display();
  }
}

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  workouts.forEach((w, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${w.exercise} - ${w.weight}kg (${w.sets} sets x ${w.reps} reps)
      <button onclick="editWorkout(${index})">Edit</button>
      <button onclick="deleteWorkout(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

display();