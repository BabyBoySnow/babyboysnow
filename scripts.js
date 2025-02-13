const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let autoSwitch; // To store the automatic interval

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-switch slides every 30 seconds
function startAutoSwitch() {
    clearInterval(autoSwitch); // Prevent multiple intervals
    autoSwitch = setInterval(nextSlide, 30000);
}

// Event Listeners
document.getElementById("next").addEventListener("click", () => {
    nextSlide();
    startAutoSwitch(); // Reset auto-timer when user interacts
});

document.getElementById("prev").addEventListener("click", () => {
    prevSlide();
    startAutoSwitch(); // Reset auto-timer when user interacts
});

// Preload all images dynamically
const imageUrls = [
    "https://raw.githubusercontent.com/BabyBoySnow/babyboysnow/main/profile-summary-card-output/algolia/0-profile-details.svg",
    "https://raw.githubusercontent.com/BabyBoySnow/babyboysnow/main/profile-summary-card-output/algolia/2-most-commit-language.svg",
    "https://raw.githubusercontent.com/BabyBoySnow/babyboysnow/main/profile-summary-card-output/algolia/3-stats.svg",
    "https://raw.githubusercontent.com/BabyBoySnow/babyboysnow/main/profile-summary-card-output/algolia/4-productive-time.svg"
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Start slideshow
showSlide(currentSlide);
startAutoSwitch();
