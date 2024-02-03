// This function toggles between two stylesheet files
function toggleStyleSheet() {
    const styleElement = document.getElementById("mainStyleSheet");
    const currStyle = styleElement.getAttribute("href");
    const newStyle = (currStyle === "style.css") ? "style2.css" : "style.css";
    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
}

// This function is triggered when the window loads
window.onload = function() {
    var savedStyle = localStorage.getItem("stylesheet") || "style.css"; //checks which style is selected rn
    var styleElement = document.getElementById("mainStyleSheet");
    styleElement.setAttribute("href", savedStyle);
    document.getElementById('switchStyle').addEventListener('click', toggleStyleSheet); //swticher
};

// For the Menu side nav bar on the 2nd style
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbarToggle').addEventListener('click', function() {
        var navbar = document.querySelector('.navbar');
        if (navbar.style.transform == 'translateX(200px)') {
            navbar.style.transform = 'translateX(0)';
        } else {
            navbar.style.transform = 'translateX(200px)';
        }
    });
});
