document.addEventListener('DOMContentLoaded', () => {
    const changeVideoButton = document.getElementById('change-video');
    const videoElement = document.getElementById('video');

    function loadRandomVideo() {
        fetch('get_random_video.php')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                videoElement.pause();
                videoElement.querySelector('source').src = data.path;
                videoElement.load();
                videoElement.play();
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Load a random video when the page loads
    loadRandomVideo();

    // Load a random video when the button is clicked
    changeVideoButton.addEventListener('click', loadRandomVideo);
});
