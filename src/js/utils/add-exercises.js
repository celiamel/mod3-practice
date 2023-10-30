const numExercises = 20;

for (let i = 1; i <= numExercises; i++) {
  let script = document.createElement("script");
  script.setAttribute("src", `js/exercises/exercise-${i}.js`);
  document.body.appendChild(script);
}


const numExercises = 2;
function checkParity(number) {
  if (number % 2 === 0) {
      console.log("Number " + number + " is even");
  } else {
      console.log("Number " + number + " is odd");
  }
}