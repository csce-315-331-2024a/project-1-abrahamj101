// This function toggles between two stylesheet files
function toggleStyleSheet() {
    // Get the style element by its ID
    const styleElement = document.getElementById("mainStyleSheet");
    // Check the current stylesheet file name
    const currStyle = styleElement.getAttribute("href");
    // Determine the new stylesheet file name
    const newStyle = (currStyle === "style.css") ? "style2.css" : "style.css";
    // Replace the stylesheet with the new stylesheet
    styleElement.setAttribute("href", newStyle);
    // Save the new stylesheet name to localStorage for persistence
    localStorage.setItem("currentStyle", newStyle);
}

// This function is triggered when the window loads
window.onload = function() {
    // Get the saved stylesheet name from localStorage
    const savedStyle = localStorage.getItem("currentStyle") || "style.css";
    // Get the HTML style element by its ID
    const styleElement = document.getElementById("mainStyleSheet");
    // Replace the href attribute of the HTML element with the saved style
    styleElement.setAttribute("href", savedStyle);
}
