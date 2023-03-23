// javascript code goes here
const highlightButton = document.getElementById("highlight-button");
const clearButton = document.getElementById("clear-button");
const inputDate = document.getElementById("input-date");
const inputColor = document.getElementById("input-color");
const calendarDays = document.querySelectorAll(".calendar-day");

highlightButton.addEventListener("click", function() {
  const selectedDate = inputDate.value;
  const selectedColor = inputColor.value;

  calendarDays.forEach(function(day) {
    if (day.innerText === selectedDate) {
      day.style.backgroundColor = selectedColor;
    }
  });

  inputDate.value = "";
  inputColor.value = "";
});

clearButton.addEventListener("click", function() {
  calendarDays.forEach(function(day) {
    day.style.backgroundColor = "";
  });
});
