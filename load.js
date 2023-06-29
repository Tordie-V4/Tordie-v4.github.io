let pages = {
    "Home": "index.html",
    "Examples": "examples.html",
    "Maths" : "maths.html",
    "Settings": "settings.html",
    "Shapes": "shapes.html",
    "SVG" : "svg.html"
}

var sidebar = document.getElementById("sidebar");
sidebar.innerHTML = "";
for (var page in pages) {
    sidebar.innerHTML += `<a href="${pages[page]}">${page}</a>`;
}

var content = document.getElementById("content");
content.innerHTML = `
<div class="menu-toggle" onclick="toggleSidebar()">
<button>&#9776; Menu</button>
</div>
` + content.innerHTML;

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "200px" ? "0" : "200px";
}

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/highlight.js/styles/foundation.min.css';
document.head.appendChild(link);
