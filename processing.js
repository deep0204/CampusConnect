document.addEventListener("DOMContentLoaded", function () {
    let progressBar = document.getElementById("progress-bar");
    let statusText = document.getElementById("status-text");
    let progress = 0;

    function updateProgress() {
        if (progress < 100) {
            progress += 20; 
            progressBar.style.width = progress + "%";
            statusText.innerText = progress + "% Completed";
            setTimeout(updateProgress, 1000);  
        } else {
            statusText.innerText = "Redirecting...";
            setTimeout(() => {
                window.location.href = "home.html";  // Redirect after completion
            }, 1000);
        }
    }

    updateProgress();
});
