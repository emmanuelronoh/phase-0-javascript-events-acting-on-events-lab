// index.js

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let leftPosition = dodger.style.left.replace('px', '');
    leftPosition = parseInt(leftPosition, 10);

    if (leftPosition > 0) {
        dodger.style.left = `${leftPosition - 1}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let leftPosition = dodger.style.left.replace('px', '');
    leftPosition = parseInt(leftPosition, 10);

    const gameWidth = document.getElementById('game').offsetWidth;
    const dodgerWidth = dodger.offsetWidth;

    if (leftPosition + dodgerWidth < gameWidth) {
        dodger.style.left = `${leftPosition + 1}px`;
    }
}

// Optional export if using modules
// module.exports = { moveDodgerLeft, moveDodgerRight };

// Event listeners can be added here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Attach event listeners for keyboard input or other interactions
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            moveDodgerLeft();
        } else if (event.key === 'ArrowRight') {
            moveDodgerRight();
        }
    });
});



