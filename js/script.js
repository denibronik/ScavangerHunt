document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by your browser');
    }

    function success(position) {
        // Replace with your predefined coordinates for each stage
        const stage1Coords = { latitude: 46.99252572386528, longitude: 9.068031661261784 };

        // Check if the user is at stage 1
        if (isCloseEnough(position.coords, stage1Coords)) {
            displayClue("Congratulations! You're at Stage 1. Here's your clue...");
        } else {
            displayClue("You're not there yet!"+position.coords.latitude+"  "+position.coords.longitude);
        }
    }

    function error() {
        alert('Unable to retrieve your location. Please enable location services.');
    }

    function isCloseEnough(coords1, coords2) {
        // Replace with your preferred distance threshold for being close enough
        const threshold = 0.1;
        const latDiff = Math.abs(coords1.latitude - coords2.latitude);
        const lonDiff = Math.abs(coords1.longitude - coords2.longitude);
        return latDiff < threshold && lonDiff < threshold;
    }

    function displayClue(message) {
        const clueContainer = document.getElementById('clue-container');
        const clueMessage = document.getElementById('clue-message');
        clueMessage.textContent = message;
        clueContainer.style.display = 'block';
    }
});
