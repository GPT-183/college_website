// JavaScript to toggle visibility of the second and third containers
document.getElementById("labLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link action
  
  // Show the second container (Lab information)
  document.getElementById("secondContainer").style.display = "inline-block";
  
  // Hide the third container (Faculty information) if it's shown
  document.getElementById("thirdContainer").style.display = "none";
});

// JavaScript to toggle visibility of the third container (Faculty)
document.getElementById("facultyLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link action
  
  // Show the third container (Faculty information)
  document.getElementById("thirdContainer").style.display = "inline-block";
  
  // Hide the second container (Lab information) if it's shown
  document.getElementById("secondContainer").style.display = "none";
});
