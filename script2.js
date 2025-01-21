document.addEventListener('DOMContentLoaded', function() {
  // Initially hide the second and third containers
  const secondContainer = document.getElementById('secondContainer');
  const thirdContainer = document.getElementById('thirdContainer');
  
  secondContainer.style.display = 'none';  // Hide second container by default
  thirdContainer.style.display = 'none';  // Hide third container by default

  // Get the links in the first container
  const labLink = document.getElementById('labLink');
  const facultyLink = document.getElementById('facultyLink');

  // Show the second container when the Labs link is clicked
  labLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    secondContainer.style.display = 'block';  // Show the second container
    thirdContainer.style.display = 'none';  // Hide third container if visible
  });

  // Show the third container when the Faculty link is clicked
  facultyLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    thirdContainer.style.display = 'block';  // Show the third container
    secondContainer.style.display = 'none';  // Hide second container if visible
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Initially hide the second and third containers
  const secondContainer = document.getElementById('secondContainer');
  const thirdContainer = document.getElementById('thirdContainer');
  
  secondContainer.style.display = 'none';  // Hide second container by default
  thirdContainer.style.display = 'none';  // Hide third container by default

  // Get the links in the first container
  const labLink = document.getElementById('labLink');
  const facultyLink = document.getElementById('facultyLink');

  // Show the second container when the Labs link is clicked
  labLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    secondContainer.style.display = 'block';  // Show the second container
    thirdContainer.style.display = 'none';  // Hide third container if visible
  });

  // Show the third container when the Faculty link is clicked
  facultyLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    thirdContainer.style.display = 'block';  // Show the third container
    secondContainer.style.display = 'none';  // Hide second container if visible
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Initially hide the second and third containers
  const secondContainer = document.getElementById('secondContainer');
  const thirdContainer = document.getElementById('thirdContainer');
  
  secondContainer.style.display = 'none';  // Hide second container by default
  thirdContainer.style.display = 'none';  // Hide third container by default

  // Get the links in the first container
  const labLink = document.getElementById('labLink');
  const facultyLink = document.getElementById('facultyLink');

  // Show the second container when the Labs link is clicked
  labLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    secondContainer.style.display = 'block';  // Show the second container
    thirdContainer.style.display = 'none';  // Hide third container if visible
  });

  // Show the third container when the Faculty link is clicked
  facultyLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link action
    thirdContainer.style.display = 'block';  // Show the third container
    secondContainer.style.display = 'none';  // Hide second container if visible
  });
});
