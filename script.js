let currentImageIndex = 0;
const images = [
  "clg images 1.jpg",  // Update with your actual image paths
  "images.jpg",
  "clg images 3.jpg"
  // Add more images as needed
];

const imageElement = document.getElementById("currentImage");
let autoSlideInterval;

function showImage(index) {
  currentImageIndex = index;
  imageElement.style.opacity = 0; // Start fade-out effect
  setTimeout(() => {
    imageElement.src = images[currentImageIndex];
    imageElement.style.opacity = 1; // Fade in new image
  }, 500); // Time to match the fade-out transition
}

// Function to go to the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Function to go to the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Initialize the first image
showImage(currentImageIndex);

// Start the auto-slide with 3-second interval
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextImage(); // Change to the next image every 3 seconds
  }, 3000);
}

// Stop the auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Restart the auto-slide after the mouse leaves
function resumeAutoSlide() {
  startAutoSlide();
}

// Start the auto-slide when the page loads
startAutoSlide();

// Add event listeners to stop/resume the auto-slide on hover
imageElement.addEventListener('mouseover', stopAutoSlide);
imageElement.addEventListener('mouseleave', resumeAutoSlide);
