function toggleProfile() {
    let modal = document.getElementById("profileModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function goToNextPage() {
    let exam = document.getElementById("exam-type").value;
    if (exam) {
        window.location.href = "examYear.html";
    } else {
        alert("Please select an examination!");
    }
}
