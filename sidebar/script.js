// Get the elements
const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

// Toggle sidebar when clicking the bars (hamburger menu)
bars.addEventListener("click", function() {
    sidebar.classList.toggle("activate");
});

// Optionally, hide sidebar when clicking the closing button if you have one
if (closingButton) {
    closingButton.addEventListener("click", function() {
        sidebar.classList.remove("activate");
    });
}
