let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function save() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

function addWorkout() {
  let exercise = document.getElementById("exercise").value;
  let weight = document.getElementById("weight").value;
  let reps = document.getElementById("reps").value;

  if (!exercise || !weight || !reps) return;

  workouts.push({
    exercise,
    weight,
    reps
  });

  save();
  display();

  document.getElementById("exercise").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("reps").value = "";
}

function deleteWorkout(index) {
  workouts.splice(index, 1);
  save();
  display();
}

function editWorkout(index) {
  let w = workouts[index];

  let newExercise = prompt("Edit exercise:", w.exercise);
  let newWeight = prompt("Edit weight:", w.weight);
  let newReps = prompt("Edit reps:", w.reps);

  if (newExercise && newWeight && newReps) {
    workouts[index] = {
      exercise: newExercise,
      weight: newWeight,
      reps: newReps
    };

    save();
    display();
  }
}

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  workouts.forEach((w, index) => {
    let div = document.createElement("div");
    div.className = "workout";

    div.innerHTML = `
      <div>
        <strong>${w.exercise}</strong>
        <div>${w.weight} kg • ${w.reps} reps</div>
      </div>

      <div>
        <button onclick="editWorkout(${index})">Edit</button>
        <button onclick="deleteWorkout(${index})">Delete</button>
      </div>
    `;

    list.appendChild(div);
  });
}

display();