let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function addWorkout() {
  let exercise = document.getElementById("exercise").value;
  let weight = document.getElementById("weight").value;

  workouts.push({ exercise, weight });
  localStorage.setItem("workouts", JSON.stringify(workouts));

  display();
}

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  workouts.forEach(w => {
    let li = document.createElement("li");
    li.textContent = w.exercise + " - " + w.weight + "kg";
    list.appendChild(li);
  });
}

display();