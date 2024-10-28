// We select the container of the cards and buttons
const projectsContainer = document.querySelector('.projects-container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

// Scroll amount (adjustable based on the desired width)
const scrollAmount = 300;

// Event for the right button
rightButton.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Smooth scroll
    });
});

// Event for the left button
leftButton.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // Smooth scroll
    });
});