document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profile-icon");
    const profileModal = document.getElementById("profile-modal");

    // Toggle Profile Modal
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        profileModal.style.display = profileModal.style.display === "block" ? "none" : "block";
    });

    // Close profile modal when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileModal.contains(event.target) && event.target !== profileIcon) {
            profileModal.style.display = "none";
        }
    });
});

document.getElementById("submitBtn").addEventListener("click", function () {
    // Redirect to the Processing Page
    window.location.href = "processing.html";
});
