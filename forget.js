document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let modal = document.getElementById("successModal");
    modal.style.display = "flex";

    // Close modal when clicking the X button
    document.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal after 3 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
});
