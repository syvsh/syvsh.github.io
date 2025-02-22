document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if user previously selected dark mode
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Store user preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️"; // Change icon
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });
});
